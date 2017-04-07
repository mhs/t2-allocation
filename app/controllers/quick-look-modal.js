// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let QuickLookModalController = Ember.Controller.extend({
  actions: {
    close() {
      return this.send("closeQuickLook");
    },

    edit() {
      this.send("closeQuickLook");
      return Ember.run.later(this, ( () => {
        return this.send("editAllocation", this.get("model"));
      })
      , 200);
    }
  },

  startDate: Ember.computed('model.startDate', function() {
    return moment(this.get('model.startDate')).format("MMM DD");
  }),

  endDate: Ember.computed('model.endDate', function() {
    return moment(this.get('model.endDate')).format("MMM DD");
  })
});

export default QuickLookModalController;
