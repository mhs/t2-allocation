App.ProjectsController = App.ChartController.extend
  sortedProjects: (->
    projects = @get('projects')
    people = @get('people')
    unless projects.findBy('dummyProject', true)
      dummyProject = App.DummyProject.create()
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = App.AvailableProject.create(people: people, office: @content, name: "Available")
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('projects')

  modelChanged: (->
    @send 'selectOffice', @get('model'), 'projects'
  ).observes('model')

  actions:
    switchToPeople: ->
      @transitionToRoute 'people', @get('model')

