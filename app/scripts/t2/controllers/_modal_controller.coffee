App.ModalController = Em.ObjectController.extend
  canDelete: null

  _editedModel: null

  edit: (model)->
    @set('canDelete', not model.isNew)
    @_editedModel = model
    @_initForm(model)

  # override me!
  _initForm: (editedModel)->

  # override me!
  _applyChanges: (editedModel) ->

  # override me!
  _beforeDelete: (editedModel)->

  _cancelChanges: (editedModel)->
    editedModel.destroy() if editedModel.isNew

  modelChanged: ( ->
    throw new Error("This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead")
  ).observes('model')

  actions:
    save: ->
      @_applyChanges(@_editedModel)
      @_editedModel.save()
      @send "closeModal"

    delete: ->
      @_beforeDelete(@_editedModel)
      @_editedModel.deleteRecord()
      @send "closeModal"

    close: ->
      @_cancelChanges(@_editedModel)
      @send "closeModal"

  shouldDisableSubmit: (->
    not @get("isDirty")
  ).property("isDirty")
