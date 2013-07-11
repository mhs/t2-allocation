App.ProjectsModalController = App.ModalController.extend
  offices: []

  selectedOffices: (->
    @get("offices").map (item) ->
      Ember.ObjectProxy.create
        content: item
        isSelected: false
  ).property("offices")

  selectOffice: (office) ->
    toggle = not office.get("isSelected")
    office.set "isSelected", toggle

  create: ->
    project = App.Project.create()
    project.on "didCreate", this, ->
      @send "close"
    @set "model", project
