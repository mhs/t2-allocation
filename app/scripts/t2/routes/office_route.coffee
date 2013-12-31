App.OfficeRoute = Ember.Route.extend
  model: (params) ->
    offices = @store.all('allocationBundle').get('firstObject.offices')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    {slug: model.get('slug')}
