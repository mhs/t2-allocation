App.ApplicationController = Ember.Controller.extend
  navUrl:(->
    window.App.NAVBAR_URL
  ).property()
