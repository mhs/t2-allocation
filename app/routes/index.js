// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let IndexRoute = Ember.Route.extend({
  afterModel(model, transition) {
    let { office_slug } = this.controllerFor('authentication').get('currentUser');
    return this.transitionTo('projects', moment().format("YYYY-MM-DD"), office_slug);
  }
});

export default IndexRoute;
