App.Router.map ->
  @route('sign_out')
  @route 'projects', path: 'projects/:slug'
  @route 'people', path: 'people/:slug'

App.IndexRoute = Ember.Route.extend
  model: ->
    @modelFor('application')
  afterModel: (model, transition) ->
    office_slug = @controllerFor('authentication').get('currentUser').office_slug
    offices = @modelFor('application').get('firstObject')
    office = offices.findProperty 'slug', office_slug
    @transitionTo('projects', office)
