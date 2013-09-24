describe 'App.ProjectsModalController', ->
  properties = null
  projectSpy = null
  officesSpy = null
  availableOffices = null

  withSubject = (cb)->
    cb(App.ProjectsModalController.create())

  editProject  = (subject)->
    subject.edit projectSpy

  assignAvailableOffices = (subject)->
    subject.set('availableOffices', availableOffices)

  selectOfficeAt = (form, idx)->
    form.get('offices').objectAt(idx).set('isSelected', true)

  makeOffice = (name)->
    Ember.Object.create
      name: name

  beforeEach ->
    availableOffices = [
      makeOffice('Office#1')
      makeOffice('Office#2')
      makeOffice('Office#3')
    ]

  beforeEach ->
    properties = {}
    for n in ['name', 'billable', 'notes']
      properties[n] = "property: '#{n}'"
    officesSpy = properties['offices'] = jasmine.createSpyObj('project.offices', ['clear', 'pushObjects'])

  beforeEach ->
    projectSpy = jasmine.createSpyObj('project', ['get', 'set', 'save', 'destroy'])

    projectSpy.get = (n)-> properties[n]

  it 'should define editable properties', ->
    withSubject (subject)->
      expect(subject.get('name')).toBeDefined()
      expect(subject.get('billable')).toBeDefined()
      expect(subject.get('notes')).toBeDefined()
      expect(subject.get('offices')).toBeDefined()

  it 'should allow saving', ->
    withSubject (subject)->
      expect(subject.get('isDirty')).toBeTruthy()

  it 'should set the name', ->
    withSubject (subject)->
      editProject subject
      expect(subject.get('name')).toEqual(properties['name'])


  describe 'properties', ->
    it 'should init properties from the model', ->
      withSubject (subject)->
        editProject subject
        for k,v of properties
          if k is not 'offices'
            expect(subject.get(k)).toEqual(v)

    describe 'offices', ->
      beforeEach ->
        expect(availableOffices.length).toBeGreaterThan(0)

      it 'should provide office list', ->
        withSubject (subject)->
          assignAvailableOffices(subject)
          expect(subject.get('offices').length).toEqual(availableOffices.length)

          availableOffices.forEach (office, idx)->
            expect(subject.get('offices').objectAt(idx).get('name')).toEqual(office.get('name'))
            expect(subject.get('offices').objectAt(idx).get('isSelected')).toBeFalsy()

      it 'should pre-select offices', ->
        properties['offices'] = [ availableOffices[0], availableOffices[2] ]

        withSubject (subject)->
          assignAvailableOffices(subject)
          editProject subject

          expect(subject.get('offices').objectAt(0).get('isSelected')).toBeTruthy()
          expect(subject.get('offices').objectAt(1).get('isSelected')).toBeFalsy()
          expect(subject.get('offices').objectAt(2).get('isSelected')).toBeTruthy()

  describe 'saving', ->
    new_properties = null

    beforeEach ->
      new_properties = {}
      for k,v of properties
        if k is not 'offices'
          new_properties[k] = v + ': modified'

    it 'should assign the properties', ->
      withSubject (subject)->
        editProject subject

        for k,v of new_properties
          subject.set(k, v)

        subject.send('save')

        for k,v of new_properties
          expect(projectSpy.set).toHaveBeenCalledWith(k, v)

    it 'should update the offices', ->
      withSubject (subject)->
        editProject subject
        assignAvailableOffices(subject)

        selectOfficeAt(subject, 0)
        selectOfficeAt(subject, 2)

        subject.send('save')
        expect(officesSpy.clear).toHaveBeenCalled()
        expect(officesSpy.pushObjects).toHaveBeenCalled()

        setOffices = officesSpy.pushObjects.mostRecentCall.args[0]
        expect(setOffices.length).toEqual(2)
