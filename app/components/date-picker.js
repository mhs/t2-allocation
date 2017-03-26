import Ember from "ember";

let DatePickerComponent = Ember.TextField.extend({
  focusIn(event) {
    return this.$().datepicker({
      dateFormat: "yy-mm-dd"});
  }
});

export default DatePickerComponent;
