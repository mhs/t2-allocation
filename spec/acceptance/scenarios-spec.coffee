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

  scenario 'cancel new allocation editor', ->
    app.setCurrentDate('06/01/2013')
    app.selectOffice 'Columbus'

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
