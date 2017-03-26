import Ember from "ember";
let SignOutRoute = Ember.Route.extend({
  redirect() {
    let auth = this.controllerFor('authentication');
    return auth.logout();
  }
});

export default SignOutRoute;
