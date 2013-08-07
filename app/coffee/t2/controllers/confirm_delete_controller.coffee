App.ConfirmDeleteController = Em.ObjectController.extend
  confirmDelete: (model, afterDeleteRoute) ->
    @set "model", model
    @set "afterDeleteRoute", afterDeleteRoute

  confirm: ->
    model = @get("model")
    after = @get("afterDeleteRoute")
    model.deleteRecord()
    @close()
    @transitionToRoute after  if after

  close: ->
    @send "closeModal"
