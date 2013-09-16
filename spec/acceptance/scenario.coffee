#
# Sometimes it may be difficult to debug specs in jasmine-node context so you can use this file
# to play with scenarios before including them in the test suite.
#
require('./lib/webdriver-dsl').install(global)
sync = require('./lib/webdriver-sync')
_ = require('underscore')

process.on 'exit', -> browser.close()

assert = require('assert')
webserver = require('./support/webserver')

app = require('./support/app')(9001)
apiServer = webserver(5000)
appServer = webserver(9001).serveDir('.')

resources = {}
resources.allocations = require('./fixtures/allocations.json').allocations;
resources.people = require("./fixtures/people.json").people
resources.projects = require("./fixtures/projects.json").projects
resources.offices = require("./fixtures/offices.json").offices
resources.slots = require('./fixtures/slots.json').slots

apiServer.when.get '/api/v1/:resources.json', (req, res)->
  resName = req.params.resources
  obj = {}
  obj[resName] = resources[resName]
  res.json obj

apiServer.when.get '/api/v1/:resources/:id.json', (req, res)->
  resName = req.params.resources
  id = +req.params.id
  res.send _.findWhere(resources[resName], id: id)

apiServer.when.post '/api/v1/:resources.json', (req, res)->
  resName = req.params.resources
  _resources = resources[resName]

  maxId = 0
  _.each _resources, (r)->
    maxId = r.id if r.id > maxId

  resource = req.body
  resource.id = maxId + 1

  _resources.push resource

  res.send(201)

apiServer.when.put '/api/v1/allocations/:id.json', (req, res)->
  allocation = _.findWhere(resources.allocations, id: +req.params.id)
  updatedAllocation = req.body
  for k,v of updatedAllocation
    allocation[k] = v
  res.send allocation

require('./support/selenium')

before = ->
  apiServer.start().then -> console.log 'apiServer started'
  appServer.start().then -> console.log 'appServer started'
  app.visit('/projects')

after = ->
  browser.close().then -> console.log 'browser closed'
  appServer.stop().then -> console.log 'appServer stopped'
  apiServer.stop().then -> console.log 'appServer stopped'

test = (name, fn)->
  sync ->console.log "***Test:", name

  before()

  fn()

  after()

xtest = ->

expect = (actualPromise)->
  matchers = {}

  matchers.toEqual = (expected, msg)->
    actualPromise.then (actual)->
      assert.equal(actual, expected, "#{msg}: #{actual} == #{expected}")

  matchers.toBe = (expected, msg)->
    actualPromise.then (actual)->
      assert(actual == expected, "#{msg}: #{actual} !== #{expected}")

  matchers.toMatch = (expected, msg)->
    actualPromise.then (actual)->
      assert(actual.match(expected), "#{msg}: #{actual} does't match #{expected}")

  matchers.toBeFalsy = (msg)->
    actualPromise.then (actual)->
      assert(!actual, "#{msg}: #{actual} should be falsy")

  matchers

test 'project existence', ->
  app.setCurrentDate('06/01/2013')

  expect(app.calendarStartDate()).toEqual('May 27')

  expect(app.firstProject().name()).toEqual('Nexia Home')

  expect(app.allocations().length()).toEqual(4)

test 'updating date field', ->
  app.dateSelector().click()
  expect(app.datePicker().isDisplayed()).toBe(true)
  app.datePicker().selectDay(1)

  app.setCurrentDate('07/01/2013')
  expect(app.calendarStartDate()).toEqual('Jul 1')

  app.setCurrentDate('07/14/2013')
  expect(app.calendarStartDate()).toEqual('Jul 15')

  app.dateSelector().click()
  app.datePicker().selectDay(7)

  expect(app.calendarStartDate()).toEqual('Jul 8')

test 'display project editor', ->
  app.firstProject().dblclick()

  app.projectEditor().tap (form)->
    expect(form.isDisplayed()).toBe(true)
    expect(form.title()).toEqual('Editing: Nexia Home')

test 'create allocation', ->
  app.setCurrentDate('06/01/2013')

  expect(app.firstProject().isDisplayed()).toBe(true)

  expect(app.firstProject().allocations().length()).toEqual(0)

  app.addAllocationBtn().click()
  app.allocationEditor().tap (form)->
    expect(form.isDisplayed()).toBe(true)

    form.startDate('2013-07-14')
    form.endDate('2013-08-14')
    form.person('Dave Anderson')
    form.project('Nexia Home')
    form.notes('Allocation note')

    form.save()

  expect(app.firstProject().allocations().length()).toEqual(1)
  expect(app.firstProject().allocations().get(0).text()).toMatch(/Dave/)


test 'edit allocation', ->
  app.setCurrentDate('06/01/2013')

  app.projects().get(1).allocations().get(0).dblclick()
  app.allocationEditor().tap (form)->
    form.startDate('2013-06-03')
    form.endDate('2013-08-04')
    form.billable(true)
    form.binding(true)
    form.person('Dan Williams')

    form.save()

  browser.close()
  app.visit('/projects')
  app.setCurrentDate('06/01/2013')

  app.projects().get(1).allocations().get(0).dblclick()
  app.allocationEditor().tap (form)->
    expect(form.startDate()).toEqual('2013-06-03', 'startDate')
    expect(form.endDate()).toEqual('2013-08-04', 'endDate')
    expect(form.billable()).toEqual(true, 'billable', 'billable')
    expect(form.binding()).toEqual(true, 'binding')
    expect(form.person()).toEqual('Dan Williams', 'person')
    expect(form.project()).toEqual('T3', 'project')
