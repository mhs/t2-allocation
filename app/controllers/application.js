import Ember from "ember";
import ENV from "t2-allocation/config/environment";

let ApplicationController = Ember.Controller.extend({
  navUrl:(() => ENV.NAVBAR_URL).property()
});

export default ApplicationController;
