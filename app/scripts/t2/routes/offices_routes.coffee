App.OfficesRoute = Ember.Route.extend
  model: ->
    App.Office.fetch()

App.OfficesIndexRoute = Ember.Route.extend
  redirect: ->
    offices = @modelFor('offices')
    @transitionTo 'offices.projects', offices.get('firstObject')

App.OfficesProjectsRoute = Ember.Route.extend
  actions:
    createProject: ->
      __hackEmberModel()

      @send 'editProject', App.Project.create()

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @modelFor('offices')
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"

    createAllocation: ->
      __hackEmberModel()

      @send 'editAllocation', App.Allocation.create
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").set "people", App.Person.find()
      @controllerFor("allocations.modal").set "projects", App.Project.find()
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

  model: (params)->
    offices = @modelFor('offices')
    offices.findProperty('slug', params.office)

  serialize: (model)->
    office: model.get('slug')
