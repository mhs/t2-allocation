import Ember from "ember";

export default Ember.Component.extend({
  content: null,
  selectedValue: null,
  prompt: null,

  init(attrs) {
    this._super(...arguments);
    var content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
  },

  actions: {
    change() {
      const changeAction = this.get('action');
      const selectedEl = this.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      const content = this.get('content');
      const selectedValue = content.objectAt(selectedIndex);

      this.set('selectedValue', selectedValue);
      changeAction(selectedValue);
    }
  }
});
