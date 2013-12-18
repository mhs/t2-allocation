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
    editedModel.deleteRecord() if editedModel.isNew || !editedModel.isValid

  modelChanged: ( ->
    throw new Error("This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead")
  ).observes('model')

  actions:
    save: ->
      if @_editedModel.get('errors')
        @_editedModel.send('becameValid')
      @_applyChanges(@_editedModel)
      @_editedModel.save().then (=> @send "closeModal"), ((error) -> )

    delete: ->
      @_beforeDelete(@_editedModel)
      @_editedModel.destroyRecord()
      @send "closeModal"

    close: ->
      @_cancelChanges(@_editedModel)
      @send "closeModal"

  shouldDisableSubmit: (->
    not @get("isDirty")
  ).property("isDirty")
