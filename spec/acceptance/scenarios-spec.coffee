'use strict'

require('./acceptance_helper')

feature 'Project list', ->

  beforeEach ->
    # Fixtures
    allocations = require('./fixtures/allocations.json').allocations

    apiServer.when.get '/api/v1/projects.json', (_, res)->
      res.sendfile('./spec/acceptance/fixtures/projects.json')

    apiServer.when.get '/api/v1/people.json', (_, res)->
      res.sendfile('./spec/acceptance/fixtures/people.json')

    apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
      found = allocations.filter (a)->
        a.id == +req.params.id
      res.send(found[0])

  beforeEach ->
    apiServer.start()
    appServer.start()

  beforeEach ->
    app.visit('/')

  afterEach ->
    browser.close()
    appServer.stop()
    apiServer.stop()

  scenario 'project existence', (done)->
    app.visit('/projects')
    app.setCurrentDate('06/01/2013')

    app.calendarStartDate().then (date)->
      expect(date).toEqual('May 27')

    app.firstProjectName().then (name)->
      expect(name).toEqual('Nexia Home')

    app.allocations().then (allocations)->
      expect(allocations.length).toEqual(4)
      done()

  scenario 'updating date field', (done)->
    app.visit('/projects')

    app.dateSelector().click()
    app.datePicker().isDisplayed().then (isDisplayed)->
      expect(isDisplayed).toEqual(true)
    app.datePicker().selectDay(1)

    app.setCurrentDate('07/01/2013')
    app.calendarStartDate().then (date)->
      expect(date).toEqual('Jul 1')

    app.setCurrentDate('07/14/2013')
    app.calendarStartDate().then (date)->
      expect(date).toEqual('Jul 15')

    app.dateSelector().click()
    app.datePicker().selectDay(7)

    app.calendarStartDate().then (date)->
      expect(date).toEqual('Jul 8')
      done()

  scenario 'display projects', (done)->
    page.elements('article.project').then (els)->
      expect(els.length).toEqual(2)
      done()

  scenario 'projects have names', (done)->
    el = page.element('article.project')
    el.text().then (text)->
      expect(text).toBe('Nexia Home')
      done()
