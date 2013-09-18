App.ProjectsModalController = App.ModalController.extend
  actions:
    selectOffice: (office) ->
      toggle = not office.get("isSelected")
      office.set "isSelected", toggle

    create: ->
      project = App.Project.create()
      @set "model", project

  offices: []

  selectedOffices: (->
    @get("offices").map (item) ->
      Ember.ObjectProxy.create
        content: item
        isSelected: false
  ).property("offices")
