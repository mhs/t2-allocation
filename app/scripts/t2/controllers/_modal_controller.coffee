App.ModalController = Em.ObjectController.extend
  actions:
    save: ->
      @get("model").save()
      @send "closeModal"

    close: ->
      @get("model").cancel()
      @send "closeModal"

  shouldDisableSubmit: (->
    not @get("isDirty")
  ).property("isDirty")
