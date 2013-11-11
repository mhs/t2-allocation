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
      # TODO: filter by people in the current office
      sortByName =
        sortProperties: ['name']
        content: App.Person.find()

      people = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
      @controllerFor("allocations.modal").set "people", people

      # TODO: filter by projects in the current office
      sortByName =
        sortProperties: ['sortOrder', 'name']
        content: App.Project.find()

      projects = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
      @controllerFor("allocations.modal").set "projects", projects
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

  model: (params)->
    offices = @modelFor('offices')
    offices.findProperty('slug', params.office)

  serialize: (model)->
    office: model.get('slug')
