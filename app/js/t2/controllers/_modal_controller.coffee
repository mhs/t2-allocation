App.ModalController = Em.ObjectController.extend
  edit: (record) ->
    @set "model", record

  save: ->
    @get("model").save()
    @send "closeModal"

  close: ->
    @send "closeModal"

  shouldDisableSubmit: (-> 
    not @get("isDirty")
  ).property("isDirty")
