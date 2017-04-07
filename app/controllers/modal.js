// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
let ModalController = Ember.Controller.extend({
  isDirty: true,

  canDelete: null,

  _editedModel: null,

  edit(model){
    this.set('canDelete', !model.get('isNew'));
    this.set('_editedModel', model);
    return this._initForm(model);
  },

  // override me!
  _initForm(editedModel){},

  // override me!
  _applyChanges(editedModel) {},

  _cancelChanges(editedModel){
    if (editedModel.get('isNew')) {
      return editedModel.deleteRecord();
    } else {
      return editedModel.rollback();
    }
  },

  modelChanged: Ember.observer('model', function() {
    throw new Error("This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead");
  }),

  actions: {
    save() {
      if (this._editedModel.get('errors.length') > 0) {
        this._editedModel.get('errors').clear();
      }
      this._applyChanges(this._editedModel);
      return this._editedModel.save().then(
        model => {
          this.send("closeModal");
          return this.send('updateBundle');
        }
        ,
        function(error) {} 
      );
    },

    delete() {
      return this._editedModel.destroyRecord().then(
        model => {
          this.send("closeModal");
          return this.send('updateBundle');
        }
        ,
        function(error) {} 
      );
    },

    close() {
      this._cancelChanges(this._editedModel);
      return this.send("closeModal");
    }
  },

  shouldDisableSubmit: Ember.computed.not('isDirty')
});

export default ModalController;
