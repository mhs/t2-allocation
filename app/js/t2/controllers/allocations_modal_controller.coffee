App.AllocationsModalController = App.ModalController.extend
  offices: []
  people: []
  projects: []
  create: ->
    allocation = App.Allocation.create()
    allocation.on "didCreate", this, ->
      @send "close"

    @set "model", allocation

  selectedProject: null
  updateProject: (->
    model = @get("model")
    if model and model.get("project") and model.get("project").get("allocations") and not model.get("project").get("allocations").toArray().contains(model)
      @get("model").get("project").get("allocations").pushObject @get("model")
  ).observes("model.project")
