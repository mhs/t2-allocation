App.ModalController = Em.ObjectController.extend
  save: ->
    @get("model").save()
    @send "closeModal"

  close: ->
    @send "closeModal"

  shouldDisableSubmit: (-> 
    not @get("isDirty")
  ).property("isDirty")
