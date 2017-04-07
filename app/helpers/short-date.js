import Ember from "ember";

let h = Ember.Helper.helper(([unformatted_date]) => moment(unformatted_date).format('MMM D'));

export default h;
