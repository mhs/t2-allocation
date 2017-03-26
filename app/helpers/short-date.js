import Ember from "ember";

let h = Ember.Handlebars.makeBoundHelper(unformatted_date => moment(unformatted_date).format('MMM D'));

export default h;
