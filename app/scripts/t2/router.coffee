App.Router.map ->
  @route('sign_out')
  @resource "offices",  ->
    @route 'projects', path: ':office/projects'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('offices')
