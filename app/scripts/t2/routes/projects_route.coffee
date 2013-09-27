App.ProjectsRoute = Ember.Route.extend
  actions:
    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", App.Office.find()
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").set "people", App.Person.find()
      @controllerFor("allocations.modal").set "projects", App.Project.find()
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

    confirmDelete: (record) ->
      @controllerFor("confirm.delete").confirmDelete record, "projects.index"
      @send "openModal", "confirm.delete"

  setupController: (controller) ->
    App.Office.find()
    App.Person.find()
    App.Allocation.find()
    @controllerFor("projects.index").set "model", App.Project.find()
