App.ApplicationController = Ember.Controller.extend
  offices: (->
    @get('model.firstObject')
  ).property('model')

  navUrl:(->
    window.App.NAVBAR_URL
  ).property()
