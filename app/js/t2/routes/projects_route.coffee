App.ProjectsRoute = Ember.Route.extend
  # model: ->
  #   projects = App.Project.find()
  #   projects.forEach (project) ->
  #     project.people.reload()
  #     project.allocations.reload()
  #     project.slots.reload()
  #     project.offices.reload()
  #   return projects
  events:
    createProject: ->
      project = App.Project.create()
      @controllerFor("projects.modal").set('model', project)
      @send "openModal", "projects.modal"

    editProject: (project) ->
      @controllerFor("projects.modal").set('model', project)
      @controllerFor("projects.modal").set('model', project)
      @send "openModal", "projects.modal"

    createAllocation: ->
      allocation = App.Project.create()
      @controllerFor("allocations.modal").set('model', allocation)
      @send "openModal", "allocations.modal"

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").set('model', allocation)
      @controllerFor("allocations.modal").set('oldProject', allocation.get('project'))
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
