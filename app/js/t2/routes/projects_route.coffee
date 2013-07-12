App.ProjectsRoute = Ember.Route.extend
  events:
    createProject: ->
      @controllerFor("projects.modal").create()
      @send "openModal", "projects.modal"

    editProject: (project) ->
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"

    createAllocation: ->
      @controllerFor("allocations.modal").create()
      @send "openModal", "allocations.modal"

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

    confirmDelete: (record) ->
      @controllerFor("confirm.delete").confirmDelete record, "projects.index"
      @send "openModal", "confirm.delete"

  setupController: (controller) ->
    people = App.Person.find()
    projects = App.Project.find()
    offices = App.Office.find()
    @controllerFor("projects.index").set "model", projects
    @controllerFor("projects.modal").set "offices", offices
    @controllerFor("allocations.modal").set "offices", offices
    @controllerFor("allocations.modal").set "people", people
    @controllerFor("allocations.modal").set "projects", projects
