import Ember from "ember";
let DateField = Ember.TextField.extend({
  type: "date",
  date: ( function(key, date) {
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
  }).property("value")
});

export default DateField;
