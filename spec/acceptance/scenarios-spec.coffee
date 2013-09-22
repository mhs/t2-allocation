'use strict'

require('./acceptance_helper')

feature 'Project list', ->

  beforeEach ->
    apiServer.loadResources(__dirname + '/fixtures')

  beforeEach ->
    apiServer.start()

  afterEach ->
    browser.close()
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
    expect(app.datePicker().displayed()).toBe(true)
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
      expect(form.displayed()).toBe(true)
      expect(form.title()).toEqual('Editing: Nexia Home')

  scenario 'create allocation', ->
    app.setCurrentDate('06/01/2013')

    expect(app.firstProject().allocations().length()).toEqual(0)

    app.addAllocationBtn().click()

    app.allocationEditor().tap (form)->
      expect(form.displayed()).toBe(true)

      form.startDate('2013-07-14')
      form.endDate('2013-08-14')
      form.person('Dave Anderson')
      form.project('Nexia Home')

      form.save()

    expect(app.firstProject().allocations().length()).toEqual(1)
    expect(app.firstProject().allocations().get(0).text()).toMatch(/Dave/)

  scenario 'cancel new allocation editor', ->
    app.setCurrentDate('06/01/2013')

    expect(app.firstProject().allocations().length()).toEqual(0)

    app.addAllocationBtn().click()

    app.allocationEditor().tap (form)->
      expect(form.displayed()).toBe(true)

      form.startDate('2013-07-14')
      form.endDate('2013-08-14')
      form.person('Dave Anderson')
      form.project('Nexia Home')

      form.cancel()

    expect(app.firstProject().allocations().length()).toEqual(0)

  scenario 'edit allocation', ->
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
