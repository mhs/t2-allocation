#
# Sometimes it may be difficult to debug specs in jasmine-node context so you can use this file
# to play with scenarios before including them in the test suite.
#
require('./lib/webdriver-dsl').install(global)
sync = require('./lib/webdriver-sync')

process.on 'exit', -> browser.close()

assert = require('assert')
webserver = require('./support/webserver')

app = require('./support/app')(9001)
apiServer = webserver(5000)
appServer = webserver(9001).serveDir('.')

allocations = require('./fixtures/allocations.json').allocations;

apiServer.when.get '/api/v1/:resources.json', (req, res)->
  res.sendfile("./spec/acceptance/fixtures/#{req.params.resources}.json")

apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
  a = allocations.filter (a)->
    a.id == +req.params.id
  res.send(a[0])

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

  matchers.toEqual = (expected)->
    actualPromise.then (actual)->
      assert.equal(actual, expected)

  matchers.toBe = (expected)->
    actualPromise.then (actual)->
      assert(actual == expected, "#{actual} !== #{expected}")

  matchers.toMatch = (expected)->
    actualPromise.then (actual)->
      assert(actual.match(expected), "#{actual} does't match #{expected}")

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

    form.setStartDate('2013-07-14')
    form.setEndDate('2013-08-14')
    form.setPerson('Dave Anderson')
    form.setProject('Nexia Home')

    form.save()

  expect(app.firstProject().allocations().length()).toEqual(1)

  expect(app.firstProject().allocations().get(0).text()).toMatch(/Dave/)
