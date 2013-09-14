#
# Sometimes it may be difficult to debug specs in jasmine-node context so you can use this file
# to play with scenarios before including them in the test suite.
#
require('./lib/webdriver-dsl').install(global)
sync = require('./lib/webdriver-sync')

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
  app.visit('/').then -> console.log 'app visited'

after = ->
  browser.close()
  appServer.stop().then -> console.log 'appServer stopped'
  apiServer.stop().then -> console.log 'appServer stopped'

test = (name, fn)->
  sync ->console.log "***Test:", name
  before()
  try
    fn()
  finally
    after()

xtest = ->

test 'project existence', ->
  app.visit('/projects')
  app.setCurrentDate('06/01/2013')

  app.calendarStartDate().then (date)->
    console.log 'start date:', date
    assert.equal(date, 'May 27')

  app.firstProject().name().then (name)->
    console.log 'project name:', name
    assert.equal(name, 'Nexia Home')

  app.allocations().then (allocations)->
    console.log 'number of allocations:', allocations.length
    assert.equal(allocations.length, 4)

test 'date field', ->
  app.visit('/projects')
  app.dateSelector().click()
  app.datePicker().isDisplayed().then (isDisplayed)->
    console.log 'date picker is displayed:', isDisplayed
    assert.equal(isDisplayed, true)
  app.datePicker().selectDay(1)

  app.setCurrentDate('07/01/2013')
  app.calendarStartDate().then (date)->
    assert.equal(date, 'Jul 1')

  app.setCurrentDate('07/14/2013')
  app.calendarStartDate().then (date)->
    assert.equal(date, 'Jul 15')

  app.dateSelector().click()
  app.datePicker().selectDay(7)

  app.calendarStartDate().then (date)->
    assert.equal(date, 'Jul 8')

test 'test project editor', ->
  app.visit('/projects')
  app.firstProject().dblclick()

  form = app.projectEditor()
  form.isDisplayed().then (isDisplayed)->
    assert.equal(isDisplayed, true)

  form.title().then (title)->
    assert.equal(title, 'Editing: Nexia Home')

test 'create allocation', ->
  app.visit('/project')
  app.setCurrentDate('06/01/2013')

  app.firstProject().isDisplayed().then (isDisplayed)->
    assert.equal(isDisplayed, true)

  app.firstProject().allocations().then (allocations)->
    assert.equal(allocations.length, 0)

  app.addAllocationBtn().click()

  form = app.allocationEditor()
  form.isDisplayed().then (isDisplayed)->
    assert.equal(isDisplayed, true)
  form.setStartDate('2013-07-14')
  form.setEndDate('2013-08-14')
  form.setPerson('Dave Anderson')
  form.setProject('Nexia Home')

  form.save()

  app.firstProject().allocations().then (allocations)->
    assert.equal(allocations.length, 1)

    allocations[0].text().then (text)->
      assert(text.match /Dave/)
