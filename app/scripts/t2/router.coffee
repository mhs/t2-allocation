App.Router.map ->
  @resource "projects", ->

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('projects')
