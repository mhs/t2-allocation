App.AllocationsModalController = App.ModalController.extend
  offices: []
  people: []
  projects: []

  oldProject: null
  selectedProject: null
  updateProject: (->
    model = @get("model")
    newProject = model?.get('project')
    newProjectAllocations = newProject?.get('allocations')
    @get('oldProject')?.get('allocations')?.removeObject(model)
    if newProjectAllocations and not newProjectAllocations.toArray().contains(model)
        newProjectAllocations.pushObject model
        @set "oldProject", newProject
  ).observes("model.project")
