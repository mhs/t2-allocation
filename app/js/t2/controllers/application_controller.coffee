App.ApplicationController = Ember.Controller.extend
  navUrl:(->
    window.ENV.NAVBAR_URL
  ).property()
