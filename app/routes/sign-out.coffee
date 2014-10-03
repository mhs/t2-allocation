`import Ember from "ember";`
SignOutRoute = Ember.Route.extend
  redirect: ->
    auth = @controllerFor('authentication')
    auth.logout()

`export default SignOutRoute;`
