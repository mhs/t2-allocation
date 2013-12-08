App.OfficesRoute = Ember.Route.extend
  model: ->
    App.Office.fetch()

App.OfficesIndexRoute = Ember.Route.extend
  redirect: ->
    offices = @modelFor('offices')
    office = offices.findProperty('slug', @controllerFor('authentication').get('currentUser').office_slug)
    @transitionTo 'offices.projects', office

App.OfficesProjectsRoute = Ember.Route.extend
  actions:
    createProject: ->
      __hackEmberModel()

      @send 'editProject', App.Project.create()

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @modelFor('offices')
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
    offices = @modelFor('offices')
    offices.findProperty('slug', params.office)

  serialize: (model)->
    office: model.get('slug')

App.OfficesPeopleRoute = Ember.Route.extend
  actions:
    # editProject: (project) ->
    #   @controllerFor("projects.modal").set "availableOffices", @modelFor('offices')
    #   @controllerFor("projects.modal").edit project
    #   @send "openModal", "projects.modal"

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
    offices = @modelFor('offices')
    offices.findProperty('slug', params.office)

  serialize: (model)->
    office: model.get('slug')
