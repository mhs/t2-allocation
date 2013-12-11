App.OfficesRoute = Ember.Route.extend

  model: (params) ->
    offices = @modelFor('application').get('firstObject')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    {slug: model.get('slug')}

App.ProjectsRoute = Ember.Route.extend

  model: ->
    @modelFor('offices').get('projects')

  actions:
    createProject: ->
      __hackEmberModel()

      @send 'editProject', App.Project.create()

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @controllerFor('offices').get('all')
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"

    createAllocation: (allocationAttrs={}) ->
      __hackEmberModel()
      defaults =
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))
      @send 'editAllocation', App.Allocation.create(Ember.merge(defaults, allocationAttrs))

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"


App.PeopleRoute = Ember.Route.extend
  model: ->
    @modelFor('offices').get('people')

  actions:
    createAllocation: (allocationAttrs={}) ->
      __hackEmberModel()
      defaults =
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))
      @send 'editAllocation', App.Allocation.create(Ember.merge(defaults, allocationAttrs))

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

