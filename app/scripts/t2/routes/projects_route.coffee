App.ProjectsRoute = Ember.Route.extend
  model: ->
    @modelFor('office').get('projects')

  actions:
    createProject: ->
      @send 'editProject', @store.createRecord('project')

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @controllerFor('office').get('all')
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"
