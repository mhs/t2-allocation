import Ember from "ember";

/*
 * The base modal component
 */
export default Ember.Component.extend({
  isDirty: true,

  canDelete: Ember.computed.not("model.isNew"),

  _editedModel: null,

  shouldDisableSubmit: Ember.computed.not("isDirty"),
  allocationModal: Ember.inject.service("allocation"),

  didInsertElement() {
    // hack to fix race condition not triggering CSS transition
    Ember.run.later(
      this,
      function() {
        $(".modal-backdrop").addClass("in");
        return $(".modal").addClass("in");
      },
      1
    );
    let offset = $(document).scrollTop();
    let viewportHeight = $(window).height();
    $(".modal").css(
      "top",
      offset + viewportHeight / 2 - $(".modal").outerHeight() / 2
    );
    $("body").on("keyup.modal", event => {
      if (event.keyCode === 27) {
        this.get("controller").send("close");
      }
    });
    return this.$("input[type=text]").first();
  },

  willDestroyElement() {
    return $("body").off("keyup.modal");
    this.get("allocationModal").closeModal();
  },

  init() {
    let model = this.get('model');

    this._super(...arguments);
    this.set("_editedModel", model);
    this._initForm(model);
  },

  edit(model) {
    this.set("_editedModel", model);
    this._initForm(model);
  },

  // override me!
  _initForm(editedModel) {},

  // override me!
  _applyChanges(editedModel) {},

  _cancelChanges(editedModel) {
    if (!editedModel) {
      return null;
    }
    if (editedModel.get("isNew")) {
      return editedModel.deleteRecord();
    } else {
      return editedModel.rollbackAttributes();
    }
  },

  modelChanged: Ember.observer("model", function() {
    throw new Error(
      "This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead"
    );
  }),

  actions: {
    save() {
      if (this._editedModel.get("errors.length") > 0) {
        this._editedModel.get("errors").clear();
      }
      this._applyChanges(this._editedModel);
      return this._editedModel.save().then(model => {
        this.get("allocationModal").closeModal();
        return this.get("allocationModal").updateBundle();
      }, function(error) {});
    },

    delete() {
      return this._editedModel.destroyRecord().then(model => {
        this.get("allocationModal").closeModal();
        return this.get("allocationModal").updateBundle();
      }, function(error) {});
    },

    close() {
      this._cancelChanges(this._editedModel);
      this.get("allocationModal").closeModal();
    }
  }
});
