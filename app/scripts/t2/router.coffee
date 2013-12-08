App.Router.map ->
  @route('sign_out')
  @resource "offices",  ->
    @route 'projects', path: ':office/projects'
    @route 'people', path: ':office/people'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('offices')
