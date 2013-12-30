App.OfficeRoute = Ember.Route.extend
  beforeModel: (queryParams) ->
    @store.find 'allocationBundle',
      start_date: @get('startDate')
      end_date: @get('endDate')

  model: (params, queryParams) ->
    offices = @store.all('allocationBundle').get('firstObject.offices')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    {slug: model.get('slug')}

  startDate:(->
    moment(App.projectsUI.get('startDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.startDate')

  endDate:(->
    moment(App.projectsUI.get('endDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.endDate')
