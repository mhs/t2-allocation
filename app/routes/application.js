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
      if (!this.get('loadingView')) {
        let view = this.container.lookup('view:loading').append();
        this.set('loadingView', view);
      }

      return this.router.one('didTransition', () => {
        return this.get('loadingView').destroy();
      }
      );
    }
  }
});

export default ApplicationRoute;
