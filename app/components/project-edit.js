// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let ProjectEditView = Ember.Component.extend({
  classNameBindings: ['hover'],
  hover: false,
  doubleClick(evt) {
    let project = this.get('controller').get('model');
    this.sendAction('editProject', project);
    return false;
  }, // to keep from bubbling up
  mouseEnter(evt, view) {
    return this.set('hover', true);
  },
  mouseLeave(evt, view) {
    return this.set('hover', false);
  }
});

export default ProjectEditView;
