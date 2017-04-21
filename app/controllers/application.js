import Ember from "ember";
import ENV from "t2-allocation/config/environment";

export default Ember.Controller.extend({
  projectsController: Ember.inject.controller('projects'),
  officeController: Ember.inject.controller('office'),

  allocationModal: Ember.inject.service("allocation"),
  navUrl:(() => ENV.NAVBAR_URL).property()
});
