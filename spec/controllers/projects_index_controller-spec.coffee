describe 'App.ProjectsIndexController', ->
  subject = -> App.ProjectsIndexController.create()
  withSubject = (cb)-> cb(subject())

  describe 'creating allocation', ->

    it 'should create new allocation instance', ->
      spyOn(App.Allocation, 'create').andCallThrough()

      subject().send('createAllocation')
      expect(App.Allocation.create).toHaveBeenCalled()

    it 'should send the appropriate action', ->
      editObject = {}
      spyOn(App.Allocation, 'create').andReturn(editObject)

      withSubject (subject)->
        spyOn(subject, 'send').andCallThrough()
        subject.send('createAllocation')
        expect(subject.send).toHaveBeenCalledWith('editAllocation', editObject)

  describe 'creating projects', ->
    it 'should create new project instance', ->
      spyOn(App.Project, 'create').andCallThrough()

      subject().send('createProject')
      expect(App.Project.create).toHaveBeenCalled()


    it 'should send the appropriate action', ->
      editObject = {}
      spyOn(App.Project, 'create').andReturn(editObject)

      withSubject (subject)->
        spyOn(subject, 'send').andCallThrough()
        subject.send('createProject')
        expect(subject.send).toHaveBeenCalledWith('editProject', editObject)
