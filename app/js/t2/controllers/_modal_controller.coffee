App.ModalController = Em.ObjectController.extend
  edit: (record) ->
    @set "model", record

  save: ->
    @get("model").save()
    @send "close"

  close: ->
    @send "closeModal"

  shouldDisableSubmit: (-> 
    not @get("isDirty")
  ).property("isDirty")
