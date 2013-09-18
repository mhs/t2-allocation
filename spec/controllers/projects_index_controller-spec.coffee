describe 'App.ProjectsIndexController', ->
  subject = -> App.ProjectsIndexController.create()
  withSubject = (cb)-> cb(subject())

  describe 'creating allocation', ->

    it 'should create new allocation instance', ->
      spyOn(App.Allocation, 'create').andCallThrough()

      subject().send('createAllocation')
      expect(App.Allocation.create).toHaveBeenCalled()

    it 'should use edit object', ->
      modelSpy = jasmine.createSpyObj('allocation', ['get'])
      spyOn(App.Allocation, 'create').andReturn(modelSpy)

      spyOn(App.AllocationEditObject, 'create')

      subject().send('createAllocation')

      expect(App.AllocationEditObject.create).toHaveBeenCalledWith(model: modelSpy)

    it 'should send the appropriate action', ->
      editObject = {}
      spyOn(App.AllocationEditObject, 'create').andReturn(editObject)

      withSubject (subject)->
        spyOn(subject, 'send').andCallThrough()
        subject.send('createAllocation')
        expect(subject.send).toHaveBeenCalledWith('editAllocation', editObject)
