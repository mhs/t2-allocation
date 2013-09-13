require('./lib/webdriver-dsl').install(global)

assert = require('assert')
webserver = require('./support/webserver')

app = require('./support/app')(9001)
apiServer = webserver(5000)
appServer = webserver(9001).serveDir('.')

allocations = require('./fixtures/allocations.json').allocations;

apiServer.when.get '/api/v1/projects.json', (_, res)->
  res.sendfile('./spec/acceptance/fixtures/projects.json')

apiServer.when.get '/api/v1/people.json', (_, res)->
  res.sendfile('./spec/acceptance/fixtures/people.json')

apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
  a = allocations.filter (a)->
    a.id == +req.params.id
  res.send(a[0])

before = ->
  apiServer.start().then -> console.log 'apiServer started'
  appServer.start().then -> console.log 'appServer started'
  app.visit('/').then -> console.log 'app visited'

after = ->
  browser.close()
  appServer.stop().then -> console.log 'appServer stopped'
  apiServer.stop().then -> console.log 'appServer stopped'

test_num_projects = ->
  before()

  page.elements('article.project').then (els)->
    console.log 'num projects', els.length
    assert.equal(els.length, 2)

  after()

test_project_name = ->
  before()

  el = page.element('article.project')
  el.text().then (text)->
    console.log 'project name:', text
    assert.equal(text, 'Nexia Home')

  after()

test_project_existence = ->
  before()

  app.visit('/projects')
  app.setCurrentDate('06/01/2013')

  app.calendarStartDate().then (date)->
    console.log 'start date:', date
    assert.equal(date, 'May 27')

  app.firstProjectName().then (name)->
    console.log 'project name:', name
    assert.equal(name, 'Nexia Home')

  app.allocations().then (allocations)->
    console.log 'number of allocations:', allocations.length
    assert.equal(allocations.length, 4)

  after()

test_date_field = ->
  before()

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

  after()

test_project_editor = ->
  before()

  app.visit('/projects')
  app.firstProject().dblclick()

  form = app.projectEditor()
  form.isDisplayed().then (isDisplayed)->
    assert.equal(isDisplayed, true)

  form.title().then (title)->
    assert.equal(title, 'Editing: Nexia Home')

  after()

test_create_allocation = ->
  before()

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
  form.setStartDate('14/07/2013')
  form.setEndDate('14/08/2013')
  form.setPerson('Dave Anderson')
  form.setProject('Nexia Home')

  form.save()

  app.firstProject().allocations().then (allocations)->
    assert.equal(allocations.length, 1)

    allocations[0].text().then (text)->
      assert(text.match /Dave/)

  after()

test_num_projects()
test_project_name()
test_project_existence()
test_date_field()
test_project_editor()
test_create_allocation()
