// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let PeopleRoute = Ember.Route.extend({
  model() {
    return this.modelFor('office').get('activePeople');
  }
});

export default PeopleRoute;
