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
    app.signIn('MyAccessToken')

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
    editAllocation = (element, cb)->
      allocation.dblclick()

      form = app.allocationEditor()
      form.present().then (present)->
        # sometimes the first dblclick doesn't work, so try again
        allocation.dblclick() unless present

      form.present().then (present)->
        throw new Error('Failed to activate allocation editor') unless present
        cb(form)

    app.setCurrentDate('06/01/2013')

    allocation = app.projects().get(1).allocations().get(0)
    editAllocation allocation, (form)->
      form.startDate('2013-06-03')
      form.endDate('2013-08-04')
      form.billable(true)
      form.binding(true)
      form.person('Dan Williams')
      form.save()

    app.visit('/projects')
    app.setCurrentDate('06/01/2013')

    allocation = app.projects().get(1).allocations().get(0)
    editAllocation allocation, (form)->
      expect(form.startDate()).toEqual('2013-06-03')
      expect(form.endDate()).toEqual('2013-08-04')
      expect(form.billable()).toEqual(true)
      expect(form.binding()).toEqual(true)
      expect(form.person()).toEqual('Dan Williams')
      expect(form.project()).toEqual('T3')

  scenario 'delete allocation', ->
    app.setCurrentDate('06/01/2013')
    expect(app.projects().get(1).allocations().length()).toEqual(4)

    allocation = app.projects().get(1).allocations().get(0)
    app.editAllocation allocation, (form)->
      form.delete()

    expect(app.projects().get(1).allocations().length()).toEqual(3)

    app.visit('/projects')
    app.setCurrentDate('06/01/2013')
    expect(app.projects().get(1).allocations().length()).toEqual(3)

  scenario 'create project', ->
    expect(app.projects().length()).toEqual(2)

    app.createProject (form)->
      expect(form.displayed()).toBe(true)
      expect(form.deleteLink.present()).toBe(false)

      form.name('My Project')
      form.billable(true)
      form.offices(['Montevideo', 'Singapore'])
      form.notes('my project note')
      form.save()

    expect(app.projects().length()).toEqual(3)
    expect(app.projects().get(2).name()).toEqual('My Project')

    app.projects().get(2).dblclick()
    app.projectEditor().tap (form)->

      expect(form.present()).toBe(true)
      expect(form.displayed()).toBe(true)
      expect(form.name()).toEqual('My Project')
      expect(form.billable()).toEqual(true)
      expect(form.offices()).toEqual(['Montevideo', 'Singapore'])
      expect(form.notes()).toEqual('my project note')

  scenario 'delete project', ->
    app.setCurrentDate('06/01/2013')

    expect(app.projects().length()).toEqual(2)
    expect(app.allocations().length()).toEqual(4)

    project = app.projects().get(1)
    app.editProject project, (form)->
      form.delete()

    expect(app.projects().length()).toEqual(1)
    expect(app.allocations().length()).toEqual(0)

    app.visit('/projects')
    app.setCurrentDate('06/01/2013')
    expect(app.projects().length()).toEqual(1)
    expect(app.allocations().length()).toEqual(0)

  scenario 'signing in', ->
    app.signOut()
    expect(browser.currentUrl()).toMatch(/http:\/\/localhost:5001\/sign_out\?return_url=.+/)

    app.visit('/')
    expect(browser.currentUrl()).toMatch(/http:\/\/localhost:5001\/sign_in\?return_url=.+/)

    app.signIn('abc')
    expect(browser.currentUrl()).toMatch(/#\/projects/)
