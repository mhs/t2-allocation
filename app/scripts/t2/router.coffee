App.Router.map ->
  @route('sign_out')
  @resource 'offices', path: 'offices/:slug', ->
    @resource 'projects'
    @resource 'people'

App.IndexRoute = Ember.Route.extend
  model: ->
    @modelFor('application')
  afterModel: (model, transition) ->
    office_slug = @controllerFor('authentication').get('currentUser').office_slug
    offices = @modelFor('application').get('firstObject')
    office = offices.findProperty 'slug', office_slug
    @transitionTo('projects', office)
