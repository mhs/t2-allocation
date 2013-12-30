App.Router.map ->
  @route('sign_out')
  @resource 'startDate', path: ':startDate', ->
    @resource 'office', {path: 'offices/:slug'}, ->
      @resource 'projects'
      @resource 'people'

App.IndexRoute = Ember.Route.extend
  afterModel: (model, transition) ->
    office_slug = @controllerFor('authentication').get('currentUser').office_slug
    @transitionTo('projects', office_slug, "2013-12-25")
