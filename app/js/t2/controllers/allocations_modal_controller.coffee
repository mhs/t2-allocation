App.AllocationsModalController = App.ModalController.extend
  offices: []
  people: []
  projects: []
  currentProject: null

  updateProject: (->
    model = @get("model")
    currentProject = @get('currentProject')
    if model
      newProject = model.get('project')
      if currentProject and currentProject != newProject
        currentProject.get('allocations')?.removeObject(model)
      if newProject
        projectAllocations = newProject.get('allocations')
        if projectAllocations and not projectAllocations.toArray().contains(model)
          projectAllocations.pushObject model
          @set "currentProject", newProject
  ).observes("model.project")
