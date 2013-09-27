describe 'App.AllocationView', ->
  subject = -> App.AllocationView.create()

  withSubject = (cb)-> cb(subject())

  describe 'editing allocation', ->
    modelSpy = null
    controllerSpy = null

    beforeEach ->
      modelSpy = jasmine.createSpyObj('model', ['get'])
      controllerSpy =
        get: jasmine.createSpy('get').andReturn(modelSpy)
        send: jasmine.createSpy('send')

    it 'should use the model', ->
      withSubject (subject)->
        spyOn(subject, 'get').andReturn(controllerSpy)

        subject.doubleClick()
        expect(controllerSpy.get).toHaveBeenCalledWith('model')

    it 'should use appropriate action', ->
      withSubject (subject)->
        spyOn(subject, 'get').andReturn(controllerSpy)

        subject.doubleClick()
        expect(controllerSpy.send).toHaveBeenCalledWith('editAllocation', modelSpy)
