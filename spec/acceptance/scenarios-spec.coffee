'use strict'

require('./acceptance_helper')

feature 'Project list', ->

  beforeEach ->
    # Fixtures
    allocations = require('./fixtures/allocations.json').allocations

    apiServer.when.get '/api/v1/:resources.json', (req, res)->
      res.sendfile("./spec/acceptance/fixtures/#{req.params.resources}.json")

    apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
      found = allocations.filter (a)->
        a.id == +req.params.id
      res.send(found[0])

  beforeEach ->
    apiServer.start()
    appServer.start()

  afterEach ->
    browser.close()
    appServer.stop()
    apiServer.stop()

  beforeEach ->
    app.visit('/projects')

  scenario 'project existence', (done)->
    app.setCurrentDate('06/01/2013')

    app.projects().then (projects)->
      expect(projects.length).toEqual(2)

    app.firstProject().name().then (name)->
      expect(name).toEqual('Nexia Home')

    app.allocations().then (allocations)->
      expect(allocations.length).toEqual(4)
      done()

  scenario 'updating date field', (done)->
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

  scenario 'display project editor', (done)->
    app.firstProject().dblclick()

    form = app.projectEditor()
    form.isDisplayed().then (isDisplayed)->
      expect(isDisplayed).toEqual(true)

    form.title().then (title)->
      expect(title).toEqual('Editing: Nexia Home')
      done()

  scenario 'create allocation', (done)->
    app.setCurrentDate('06/01/2013')

    app.firstProject().isDisplayed().then (isDisplayed)->
      expect(isDisplayed).toEqual(true)

    app.firstProject().allocations().then (allocations)->
      expect(allocations.length).toEqual(0)

    app.addAllocationBtn().click()

    app.allocationEditor().tap (form)->
      form.isDisplayed().then (isDisplayed)->
        expect(isDisplayed).toEqual(true)

      form.setStartDate('2013-07-14')
      form.setEndDate('2013-08-14')
      form.setPerson('Dave Anderson')
      form.setProject('Nexia Home')
      form.save()

    app.firstProject().allocations().then (allocations)->
      expect(allocations.length).toEqual(1)

      allocations[0].text().then (text)->
        expect(text).toMatch(/Dave Anderson/)
        done()
