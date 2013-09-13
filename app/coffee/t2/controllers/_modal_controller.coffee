App.ModalController = Em.ObjectController.extend
  actions:
    save: ->
      @get("model").save()
      @send "closeModal"

    close: ->
      @send "closeModal"

  shouldDisableSubmit: (-> 
    not @get("isDirty")
  ).property("isDirty")
