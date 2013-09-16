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

  scenario 'project existence', ->
    app.setCurrentDate('06/01/2013')

    expect(app.calendarStartDate()).toEqual('May 27')
    expect(app.firstProject().name()).toEqual('Nexia Home')
    expect(app.allocations().length()).toEqual(4)

  scenario 'updating date field', ->
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

  scenario 'display project editor', ->
    app.firstProject().dblclick()

    app.projectEditor().tap (form)->
      expect(form.isDisplayed()).toBe(true)
      expect(form.title()).toEqual('Editing: Nexia Home')

  scenario 'create allocation', ->
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
