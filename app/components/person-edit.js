import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: ['hover'],
  hover: false,
  doubleClick(evt) {
    this.sendAction('editPerson');
    return false;
  }, // to keep from bubbling up
  mouseEnter(evt, view) {
    return this.set('hover', true);
  },
  mouseLeave(evt, view) {
    return this.set('hover', false);
  }
});
