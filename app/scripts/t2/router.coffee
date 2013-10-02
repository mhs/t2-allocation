App.Router.map ->
  @route('sign_out')
  @resource "offices", path: 'offices', ->
    @resource 'office', path: ':office_slug', ->
      @route 'projects', path: '/projects/:start_date'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo('offices')
