App.EditDateView = Ember.TextField.extend({
  classNames: ['edit'],

  insertNewline: function () {
    this.get('controller').confirmDate(event.target.value);
  },

  change: function (event) {
    if(this.value !== "") {
      this.get('controller').confirmDate(event.target.value);
    }
  },

  didInsertElement: function () {
    this.$().focus();
  },

  focusIn: function (event) {
    this.set('value',moment(App.currentDate.get('date')).format("L"));
    $(event.target).datepicker();
  }
});