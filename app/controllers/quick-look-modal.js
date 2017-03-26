import Ember from "ember";

let QuickLookModalController = Ember.ObjectController.extend({
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

  startDate: (function() {
    return moment(this.get('model.startDate')).format("MMM DD");
  }).property('model.startDate'),

  endDate: (function() {
    return moment(this.get('model.endDate')).format("MMM DD");
  }).property('model.endDate')
});

export default QuickLookModalController;
