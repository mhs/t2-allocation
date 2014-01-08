App.ProjectsRoute = Ember.Route.extend
  model: ->
    office = @modelFor('office')
    projects = office.get('projects')
    unless projects.findBy('dummyProject', true)
      dummyProject = @store.createRecord('dummyProject')
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = @store.createRecord('availableProject',
        people: office.get('people')
        office: office
        name: "Available"
      )
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)


  actions:
    createProject: ->
      @send 'editProject', @store.createRecord('project')

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @controllerFor('office').get('all')
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"
