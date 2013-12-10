App.ProjectsRoute = Ember.Route.extend
  actions:
    createProject: ->
      __hackEmberModel()

      @send 'editProject', App.Project.create()

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @controllerFor('application').get('offices')
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

  model: (params)->
    offices = @modelFor('application').get('firstObject')
    offices.findProperty('slug', params.slug)

  serialize: (model) ->
    {slug: model.get('slug')}

App.PeopleRoute = Ember.Route.extend
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

  model: (params)->
    offices = @modelFor('application').get('firstObject')
    offices.findProperty('slug', params.slug)

  serialize: (model) ->
    {slug: model.get('slug')}
