App.Router.map ->
  @route('sign_out')
  @resource "offices", path: '/office', ->
    @route 'projects', path: '/:office/projects'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('offices')
