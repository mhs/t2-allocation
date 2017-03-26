import DS from "ember-data";

let DateTransform = DS.Transform.extend({
  deserialize(string) {
    if (!string) {
      return null;
    } else {
      return moment(string);
    }
  },

  serialize(date) {
    if (!date) {
      return null;
    }
    return moment(date).format('YYYY-MM-DD');
  }
});

export default DateTransform;
