`import Ember from "ember";`
ModalController = Ember.ObjectController.extend
  isDirty: true

  canDelete: null

  _editedModel: null

  edit: (model)->
    @set('canDelete', not model.get('isNew'))
    @set('_editedModel', model)
    @_initForm(model)

  # override me!
  _initForm: (editedModel)->

  # override me!
  _applyChanges: (editedModel) ->

  _cancelChanges: (editedModel)->
    if editedModel.get('isNew')
      editedModel.deleteRecord()
    else
      editedModel.rollback()

  modelChanged: ( ->
    throw new Error("This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead")
  ).observes('model')

  actions:
    save: ->
      if @_editedModel.get('errors.length') > 0
        @_editedModel.get('errors').clear()
      @_applyChanges(@_editedModel)
      @_editedModel.save().then(
        (model) =>
          @send "closeModal"
          @send('updateBundle')
        ,
        (error) -> 
      )

    delete: ->
      @_editedModel.destroyRecord().then(
        (model) =>
          @send "closeModal"
          @send('updateBundle')
        ,
        (error) -> 
      )

    close: ->
      @_cancelChanges(@_editedModel)
      @send "closeModal"

  shouldDisableSubmit: Ember.computed.not 'isDirty'

`export default ModalController;`
