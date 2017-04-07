// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
let DateField = Ember.TextField.extend({
  type: "date",
  date: Ember.computed("value", function(key, date) {
    if (date) {
      this.set("value", moment(date).format('YYYY-MM-DD'));
    } else {
      let value = this.get("value");
      if (value) {
        date = moment(value);
      } else {
        date = null;
      }
    }
    return date;
  })
});

export default DateField;
