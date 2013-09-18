describe 'App.AllocationEditObject', ->
  modelSpy = null

  subject = ()->
    App.AllocationEditObject.create(model: modelSpy)

  withSubject = (cb)-> cb(subject())

  beforeEach ->
    modelSpy = jasmine.createSpyObj('model', ['get', 'set', 'save', 'destroy'])

  describe 'saving', ->
    it 'should save the model', ->
      subject().save()
      expect(modelSpy.save).toHaveBeenCalled()

    describe 'updating properties', ->
      props = null

      beforeEach ->
        props =
          billable: 'prop-billable'
          binding: 'prop-binding'
          endDate: 'prop-endDate'
          notes: 'prop-notes'
          person: 'prop-person'
          project:
            get: -> jasmine.createSpyObj('allocations', ['pushObject'])
          slot: 'prop-slot'
          startDate: 'prop-startDate'

      it 'should copy properties from the model', ->
        modelSpy.get = (name)-> props[name]

        for n,v of props
          expect(subject().get(n)).toBe(v)

      it 'should update its model properties', ->
        withSubject (subject)->
          subject.get = (name)-> props[name]

          subject.save()

          for n,v of props
            expect(modelSpy.set).toHaveBeenCalledWith(n, v)

    describe 'changing project', ->
      allocationsSpy = null
      projectSpy = null

      beforeEach ->
        allocationsSpy = jasmine.createSpyObj('allocations', ['removeObject', 'pushObject'])
        projectSpy = jasmine.createSpyObj('project', ['get'])
        projectSpy.get.andReturn(allocationsSpy)

      it 'should remove the model from initial project', ->
        modelSpy.get = (_)-> projectSpy

        withSubject (subject)->
          subject.set('project', null)
          subject.save()

        expect(allocationsSpy.removeObject).toHaveBeenCalledWith(modelSpy)

      it 'should add the model to the new project', ->
        modelSpy.get = (_)-> null

        withSubject (subject)->
          subject.set('project', projectSpy)
          subject.save()

        expect(allocationsSpy.pushObject).toHaveBeenCalledWith(modelSpy)

  describe 'cancelling', ->
    context 'new model', ->
      it 'should destroy the model', ->
        modelSpy.isNew = true

        withSubject (subject)->
          subject.cancel()

        expect(modelSpy.destroy).toHaveBeenCalled()

    context 'existing model', ->
      it 'should not destroy the model', ->
        modelSpy.isNew = false

        withSubject (subject)->
          subject.cancel()

        expect(modelSpy.destroy).not.toHaveBeenCalled()

