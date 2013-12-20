App.OfficeRoute = Ember.Route.extend
  model: (params) ->
    offices = @modelFor('application').get('offices')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    {slug: model.get('slug')}
