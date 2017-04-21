import Ember from "ember";
let ApplicationRoute = Ember.Route.extend({
  beforeModel(transition){
    let auth = this.controllerFor('authentication');
    auth.extractAccessToken();
    if (!auth.get('isAuthenticated')) {
      transition.abort();
      auth.login();
    }
  },

  actions: {
    loading() {
      this.controllerFor('application').set('isLoading', true);

      return this.router.one('didTransition', () => {
        this.controllerFor('application').set('isLoading', false);
      }
      );
    }
  }
});

export default ApplicationRoute;
