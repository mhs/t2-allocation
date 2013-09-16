#
# Sometimes it may be difficult to debug specs in jasmine-node context so you can use this file
# to play with scenarios before including them in the test suite.
#
require('../lib/webdriver-dsl').install(global)
sync = require('../lib/webdriver-sync')
_ = require('underscore')

process.on 'exit', -> browser.close()

assert = require('assert')
app = require('./app')(9001)
apiServer = require('./apiServer')(5000)
appServer = require('./webserver')(9001).serveDir('.')

require('./selenium')

before = ->
  apiServer.loadResources(__dirname + '/../fixtures')
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
  expect(app.datePicker().displayed()).toBe(true)
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
    expect(form.displayed()).toBe(true)
    expect(form.title()).toEqual('Editing: Nexia Home')

test 'create allocation', ->
  app.setCurrentDate('06/01/2013')

  expect(app.firstProject().displayed()).toBe(true)

  expect(app.firstProject().allocations().length()).toEqual(0)

  app.addAllocationBtn().click()
  app.allocationEditor().tap (form)->
    expect(form.displayed()).toBe(true)

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

  app.visit('/projects')
  app.setCurrentDate('06/01/2013')

  app.projects().get(1).allocations().get(0).dblclick()
  app.allocationEditor().tap (form)->
    expect(form.startDate()).toEqual('2013-06-03')
    expect(form.endDate()).toEqual('2013-08-04')
    expect(form.billable()).toEqual(true)
    expect(form.binding()).toEqual(true)
    expect(form.person()).toEqual('Dan Williams')
    expect(form.project()).toEqual('T3')
