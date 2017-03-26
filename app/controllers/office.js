// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ENV from "t2-allocation/config/environment";

let OfficeController = Ember.ObjectController.extend({
  needs: ['application'],

  all: (function() {
    return this.store.all('office');
  }).property(),

  allActive: (function() {
    return this.store.filter('office', office => !office.get('deleted'));
  }).property(),

  newProjectUrl: ENV.PROJECTS_URL + 'new',

  modelChanged: (function() {
    let route = this.get('controllers.application.currentRouteName');
    if (!route) { return; }
    return this.transitionToRoute(route, this.get('model'));
  }).observes('model'),

  actions: {
    selectDate(newDate) {
      let route = this.get('controllers.application.currentRouteName');
      return this.transitionToRoute(route, newDate, this.get('model.slug'));
    },

    resize() {
      let route = this.get('controllers.application.currentRouteName');
      return this.transitionToRoute(route, UIGlobal.projectsUI.get('date'), this.get('model.slug'));
    }
  }
});

export default OfficeController;
