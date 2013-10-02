App.OfficesRoute = Ember.Route.extend
  model: ->
    App.Office.fetch()

App.OfficesIndexRoute = Ember.Route.extend
  redirect: ->
    offices = @modelFor('offices')
    d = moment(App.projectsUI.get('date')).format('YYYY-MM-DD')
    @transitionTo 'office.projects', offices.get('firstObject'), d

App.OfficeRoute = Ember.Route.extend
  model: (params)->
    console.log '-- office - #model', params
    @modelFor('offices').findProperty('slug', params.office_slug)

  serialize: (model)->
    office_slug: model.get('slug')

App.OfficeProjectsRoute = Ember.Route.extend
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
    @modelFor('office')

  setupController: (controller, model)->
    console.log '-------- setupController', model
    controller.set('model', model)

  serialize: (model)->
    d = moment(App.projectsUI.get('date')).format('YYYY-MM-DD')
    start_date: d
