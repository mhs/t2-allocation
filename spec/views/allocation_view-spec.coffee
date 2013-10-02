describe 'App.AllocationView', ->
  controllerSpy = null
  modelSpy = null

  subject = -> App.AllocationView.create()

  withSubject = (cb)-> cb(subject())

  assignControllerTo = (view)->
    Ember.run ->
      view.set('controller', controllerSpy)

  beforeEach ->
    modelSpy = {}
    controllerSpy = Ember.Object.create
      model: modelSpy
      isExternal: null
      send: jasmine.createSpy('send')

  describe 'editing allocation', ->
    it 'should use appropriate action', ->
      withSubject (subject)->
        assignControllerTo subject

        subject.doubleClick()
        expect(controllerSpy.send).toHaveBeenCalledWith('editAllocation', modelSpy)

  describe 'rendering', ->
    withRendered = (cb)->
      withSubject (subject)->
        assignControllerTo subject
        Ember.run -> subject.append()
        try
          cb(subject.$())
        finally
          Ember.run -> subject.remove()

    it 'should use "allocation" class', ->
      withRendered ($el)->
        expect($el).toHaveClass('allocation')

    it 'should not be external by default', ->
      withRendered ($el)->
        expect($el).not.toHaveClass('external')

    describe 'external allocation', ->
      beforeEach ->
        Ember.run ->
          controllerSpy.set('isExternal', true)

      it 'should mark the allocation as external', ->
        withRendered ($el)->
          expect($el).toHaveClass('external')
