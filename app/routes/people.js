import Ember from "ember";

let PeopleRoute = Ember.Route.extend({
  model() {
    return this.modelFor('office').get('activePeople');
  }
});

export default PeopleRoute;
