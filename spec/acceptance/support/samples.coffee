#
# Sometimes it may be difficult to debug specs in jasmine-node context so you can use this file
# to play with scenarios before including them in the test suite.
#
# NOTICE: Run `grunt run-samples` to execute samples in this file
#
#
# %s/^scenario '/xscenario '/g
# %s/^xscenario '/scenario '/g
#
# :@"
#
require('../lib/webdriver-dsl').install(global)
require('../lib/webdriver-dsl').logging(true)

Error.stackTraceLimit = Infinity;

sync = require('../lib/webdriver-sync')
_ = require('underscore')

process.on 'exit', -> browser.close()

process.once 'exit', ->
  if failures.length
    console.log ''
    console.log '*** Failures ***'
    console.log f for f in failures
    process.exit(1)

assert = require('assert')
app = require('./app')('localhost', 9001)
apiServer = require('./api-server')(5001)
#appServer = require('./webserver')(9001).serveDir('./dist')
appServer = require('./webserver')(9001).serveDir('./.tmp').serveDir('./app')

require('./selenium')

before = ->
  apiServer.loadResources(__dirname + '/../fixtures')
  apiServer.start().then -> console.log 'apiServer started'
  appServer.start().then -> console.log 'appServer started'
  app.signIn('MyAccessToken')

after = ->
  browser.close().then -> console.log 'browser closed'
  appServer.stop().then -> console.log 'appServer stopped'
  apiServer.stop().then -> console.log 'appServer stopped'

scenario = (name, fn)->
  sync ->console.log "***scenario:", name

  sync before

  sync fn

  sync after

xscenario = ->

failures = []

reportFailure = (msg)->
  console.log '--F--'
  failures.push(msg)

expect = (actualPromise)->
  matchers = {}

  matchers.toEqual = (expected, msg)->
    actualPromise.then (actual)->
      if not _.isEqual(actual, expected)
        reportFailure "#{actual} != #{expected}"

  matchers.toBe = (expected, msg)->
    actualPromise.then (actual)->
      if actual isnt expected
        reportFailure "#{actual} !== #{expected}"

  matchers.toMatch = (expected, msg)->
    actualPromise.then (actual)->
      if not actual.match(expected)
        reportFailure "#{actual} does't match #{expected}"

  matchers.toBeFalsy = (msg)->
    actualPromise.then (actual)->
      if actual
        reportFailure "#{actual} should be falsy"

  matchers

scenario 'updating date field', ->
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

scenario 'create allocation', ->
  app.setCurrentDate('06/01/2013')
  app.selectOffice 'Columbus'

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

scenario 'edit allocation', ->
  app.setCurrentDate('06/01/2013')

  allocation = app.projects().get(0).allocations().get(0)
  app.editAllocation allocation, (form)->
    form.startDate('2013-06-03')
    form.endDate('2013-08-04')
    form.billable(true)
    form.binding(true)
    form.person('Dan Williams')
    form.notes('my allocation note')
    form.save()

  app.visit('/')
  app.setCurrentDate('06/01/2013')

  allocation = app.projects().get(0).allocations().get(0)
  app.editAllocation allocation, (form)->
    expect(form.startDate()).toEqual('2013-06-03')
    expect(form.endDate()).toEqual('2013-08-04')
    expect(form.billable()).toEqual(true)
    expect(form.binding()).toEqual(true)
    expect(form.person()).toEqual('Dan Williams')
    expect(form.project()).toEqual('T3')
    expect(form.notes()).toEqual('my allocation note')
    form.cancel()

scenario 'delete allocation', ->
  app.setCurrentDate('06/01/2013')
  project = app.projects().get(0)
  expect(project.allocations().length()).toEqual(4)

  allocation = project.allocations().get(0)
  app.editAllocation allocation, (form)->
    form.delete()

  expect(project.allocations().length()).toEqual(3)

  app.visit('/')
  app.setCurrentDate('06/01/2013')
  expect(app.projects().get(0).allocations().length()).toEqual(3)

scenario 'create project', ->
  expect(app.projects().length()).toEqual(1)

  app.createProject (form)->
    expect(form.displayed()).toBe(true)
    expect(form.deleteLink.present()).toBe(false)

    form.name('My Project')
    form.billable(true)
    form.offices(['Cincinnati', 'Singapore'])
    form.notes('my project note')
    form.save()

  expect(app.projects().length()).toEqual(2)
  expect(app.projects().get(1).name()).toEqual('My Project')

  app.projects().get(1).dblclick()
  app.projectEditor().tap (form)->
    expect(form.present()).toBe(true)
    expect(form.displayed()).toBe(true)
    expect(form.name()).toEqual('My Project')
    expect(form.billable()).toEqual(true)
    expect(form.offices()).toEqual(['Cincinnati', 'Singapore'])
    expect(form.notes()).toEqual('my project note')

scenario 'delete project', ->
  app.selectOffice 'Cincinnati'
  app.setCurrentDate('06/01/2013')

  expect(app.projects().length()).toEqual(1)
  expect(app.allocations().length()).toEqual(4)

  project = app.projects().get(0)
  app.editProject project, (form)->
    form.delete()

  expect(app.projects().length()).toEqual(0)
  expect(app.allocations().length()).toEqual(0)

  app.visit('/')
  app.selectOffice 'Cincinnati'
  app.setCurrentDate('06/01/2013')
  expect(app.projects().length()).toEqual(0)
  expect(app.allocations().length()).toEqual(0)

scenario 'signing in', ->
  app.signOut()
  expect(browser.currentUrl()).toMatch(/http:\/\/localhost:5001\/sign_out\?return_url=.+/)

  app.visit('/')
  expect(browser.currentUrl()).toMatch(/http:\/\/localhost:5001\/sign_in\?return_url=.+/)

  app.signIn('abc')
  expect(browser.currentUrl()).toMatch(/#\/office\/.+\/projects/)

scenario 'filter by office', ->
  app.setCurrentDate('06/01/2013')

  app.selectOffice 'Columbus'
  expect(app.projects().length()).toEqual(1)
  expect(app.firstProject().name()).toEqual('Nexia Home')

  app.selectOffice 'Cincinnati'
  expect(app.projects().length()).toEqual(1)
  expect(app.firstProject().name()).toEqual('T3')
