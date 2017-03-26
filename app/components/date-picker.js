// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let DatePickerComponent = Ember.TextField.extend({
  focusIn(event) {
    return this.$().datepicker({
      dateFormat: "yy-mm-dd"});
  }
});

export default DatePickerComponent;
