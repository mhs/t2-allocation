describe 'App.ModalController', ->
  subject = null
  editedModelSpy = null

  beforeEach -> subject = App.ModalController.create()

  beforeEach ->
    editedModelSpy = jasmine.createSpyObj('editedModel', ['save', 'destroy', 'destroyRecord'])

  beforeEach ->
    spyOn(subject, 'send').andCallThrough()

  describe 'initializing modal', ->
    context 'new model', ->
      beforeEach ->
        editedModelSpy.isNew = true
        subject.edit(editedModelSpy)

      it 'should not allow deleting', ->
        expect(subject.get('canDelete')).toBeFalsy()

    context 'existing model', ->
      beforeEach ->
        editedModelSpy.isNew = false
        subject.edit(editedModelSpy)

      it 'should allow deleting', ->
        expect(subject.get('canDelete')).toBeTruthy()

  describe 'setting model', ->
    it 'should fail', ->
      expect( -> subject.set('model', {})).toThrow()

  describe 'saving', ->
    beforeEach ->
      subject.edit(editedModelSpy)
      subject.send('save')

    it 'should save the model', ->
      expect(editedModelSpy.save).toHaveBeenCalled()

    it 'should close the dialog', ->
      expect(subject.send).toHaveBeenCalledWith('closeModal')

  describe 'deleting', ->
    beforeEach ->
      subject.edit(editedModelSpy)
      subject.send('delete')

    it 'should delete the model', ->
      expect(editedModelSpy.destroyRecord).toHaveBeenCalled()

    it 'should close the dialog', ->
      expect(subject.send).toHaveBeenCalledWith('closeModal')

  describe 'canceling', ->
    beforeEach ->
      subject.edit(editedModelSpy)

    it 'should close the dialog', ->
      subject.send('close')
      expect(subject.send).toHaveBeenCalledWith('closeModal')

    context 'new model', ->
      beforeEach ->
        editedModelSpy.isNew = true
        subject.send('close')

      it 'should destroy the model', ->
        expect(editedModelSpy.destroy).toHaveBeenCalled()

    context 'existing model', ->
      beforeEach ->
        editedModelSpy.isNew = false
        subject.send('close')

      it 'should destroy the model', ->
        expect(editedModelSpy.destroy).not.toHaveBeenCalled()
