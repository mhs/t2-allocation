// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let PersonEditView = Ember.View.extend({
  classNameBindings: ['hover'],
  hover: false,
  doubleClick(evt) {
    let person = this.get('controller').get('model');
    this.get('controller').send('editPerson', person);
    return false;
  }, // to keep from bubbling up
  mouseEnter(evt, view) {
    return this.set('hover', true);
  },
  mouseLeave(evt, view) {
    return this.set('hover', false);
  }
});

export default PersonEditView;
