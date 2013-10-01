App.Router.map ->
  @resource "projects", ->
  @route('sign_out')

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('projects')
