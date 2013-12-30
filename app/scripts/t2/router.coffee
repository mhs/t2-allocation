App.Router.map ->
  @route('sign_out')
  @resource 'office', {path: 'offices/:slug', queryParams: ['start_date']}, ->
    @resource 'projects'
    @resource 'people'

App.IndexRoute = Ember.Route.extend
  afterModel: (model, transition) ->
    office_slug = @controllerFor('authentication').get('currentUser').office_slug
    @transitionTo('projects', office_slug)
