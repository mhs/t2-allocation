App.SignOutRoute = Ember.Route.extend
  redirect: ->
    auth = @controllerFor('authentication')
    auth.logout()
