describe 'App.AllocationsModalController', ->
  EDITABLE_PROPERTIES = [
    'billable'
    'binding'
    'endDate'
    'notes'
    'person'
    'project'
    'slot'
    'startDate'
  ]
  properties = null
  allocationSpy = null
  projectSpy = null
  projectAllocationsSpy = null

  setupTestStuff = ->
    container = new Ember.Container()
    container.register 'controller:projects', {}
    App.AllocationsModalController.create
      container: container

  withSubject = (cb)->
    cb(setupTestStuff())

  assignAllocationTo = (subject)->
    subject.edit(allocationSpy)

  beforeEach ->
    projectAllocationsSpy = jasmine.createSpyObj('allocations', ['removeObject', 'pushObject'])
    projectSpy = jasmine.createSpyObj('project', ['get'])
    projectSpy.get.andReturn(projectAllocationsSpy)

    allocationSpy = jasmine.createSpyObj('allocation', ['get', 'set', 'save', 'destroy', 'destroyRecord'])
    allocationSpy.get.andCallFake (name)->
      properties[name]

  beforeEach ->
    properties = {}
    for n in EDITABLE_PROPERTIES
      properties[n] = "property: '#{n}'"

    properties['project'] = projectSpy

  it 'should define editable properties', ->
    withSubject (subject)->
      EDITABLE_PROPERTIES.forEach (name)->
        expect(subject.get(name)).toBeDefined()

  it 'should allow saving', ->
    withSubject (subject)->
      expect(subject.get('isDirty')).toBeTruthy()

  describe 'properties', ->
    it 'should init properties from the model', ->
      withSubject (subject)->
        assignAllocationTo(subject)
        for k,v of properties
          expect(subject.get(k)).toEqual(v)

  describe 'saving', ->
    new_properties = null

    save = (subject)-> subject.send('save')

    beforeEach ->
      new_properties = {}
      for k, v of properties
        new_properties[k] = v + ': modified'

      new_properties['project'] = null

    it 'should assign the properties', ->
      withSubject (subject)->
        assignAllocationTo subject

        for k, v of new_properties
          subject.set(k, v)

        save subject

        for k, v of new_properties
          expect(allocationSpy.set).toHaveBeenCalledWith(k, v)

    describe 'changing project', ->
      it 'should remove the allocation from initial project', ->
        allocationSpy.get.andCallFake (name)->
          return projectSpy if name == 'project'
          return properties[name]

        expect(allocationSpy.get('project')).toBe(projectSpy)

        withSubject (subject)->
          assignAllocationTo subject

          subject.set('project', null)

          save subject

        expect(projectAllocationsSpy.removeObject).toHaveBeenCalledWith(allocationSpy)

      it 'should add the model to the new project', ->
        allocationSpy.get.andCallFake (name)->
          return null if name == 'project'
          return properties[name]

        withSubject (subject)->
          assignAllocationTo subject

          subject.set('project', projectSpy)

          save subject

        expect(projectAllocationsSpy.pushObject).toHaveBeenCalledWith(allocationSpy)

  describe 'deleting', ->
    doDelete = (subject)-> subject.send('delete')

    it 'should remove the allocation from its assigned project', ->
      allocationSpy.get.andCallFake (name)->
        return projectSpy if name == 'project'
        return properties[name]

      withSubject (subject)->
        assignAllocationTo subject

        doDelete subject

      expect(projectAllocationsSpy.removeObject).toHaveBeenCalledWith(allocationSpy)
