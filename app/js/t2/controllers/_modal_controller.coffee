App.ModalController = Em.ObjectController.extend
  edit: (record) ->
    record.on "didUpdate", this, ->
      @send "close"

    @set "model", record

  save: ->
    @get("model").save()

  close: ->
    
    # var model = this.get('model'),
    #     transaction = model.get('transaction');
    
    # if (transaction) { transaction.rollback(); }
    # if (model.get('errors')) { model.set('errors', null); }
    @send "closeModal"

  shouldDisableSubmit: (-> 
    not @get("isDirty")
  ).property("isDirty")
