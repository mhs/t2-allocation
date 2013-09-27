describe 'App.ModalController', ->
  subject = null
  editedModelSpy = null

  beforeEach -> subject = App.ModalController.create()

  beforeEach ->
    editedModelSpy = jasmine.createSpyObj('editedModel', ['save', 'destroy'])
    subject.edit(editedModelSpy)

  beforeEach ->
    spyOn(subject, 'send').andCallThrough()

  describe 'setting model', ->
    it 'should fail', ->
      expect( -> subject.set('model', {})).toThrow()

  describe 'saving', ->

    beforeEach -> subject.send('save')

    it 'should save the model', ->
      expect(editedModelSpy.save).toHaveBeenCalled()

    it 'should close the dialog', ->
      expect(subject.send).toHaveBeenCalledWith('closeModal')

  describe 'canceling', ->

    it 'should close the dialog', ->
      subject.send('close')
      expect(subject.send).toHaveBeenCalledWith('closeModal')

    context 'new model', ->
      beforeEach ->
        editedModelSpy.isNew = true

      it 'should destroy the model', ->
        subject.send('close')
        expect(editedModelSpy.destroy).toHaveBeenCalled()

    context 'existing model', ->
      beforeEach ->
        editedModelSpy.isNew = false

      it 'should destroy the model', ->
        subject.send('close')
        expect(editedModelSpy.destroy).not.toHaveBeenCalled()
