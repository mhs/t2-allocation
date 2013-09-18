describe 'App.ModalController', ->
  modelSpy = null
  subject = null

  beforeEach -> subject = App.ModalController.create()

  beforeEach ->
    modelSpy = jasmine.createSpyObj('model', ['save', 'cancel'])
    spyOn(subject, 'send')
    spyOn(subject, 'get').andReturn(modelSpy)

  describe 'saving', ->

    beforeEach -> subject.save()

    it 'should save the model', ->
      expect(modelSpy.save).toHaveBeenCalled()

    it 'should close the dialog', ->
      expect(subject.send).toHaveBeenCalledWith('closeModal')

  describe 'canceling', ->

    beforeEach -> subject.close()

    it 'should save the model', ->
      expect(modelSpy.cancel).toHaveBeenCalled()

    it 'should close the dialog', ->
      expect(subject.send).toHaveBeenCalledWith('closeModal')
