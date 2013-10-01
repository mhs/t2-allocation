App.LoadingRoute = Ember.Route.extend
  deactivate: ->
    @controllerFor('loading').stop()
