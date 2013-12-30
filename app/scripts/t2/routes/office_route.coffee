App.OfficeRoute = Ember.Route.extend
  beforeModel: (transition) ->
    startDate = transition.params.startDate

    debugger
    App.projectsUI.set('date', moment(startDate).format("L")) if startDate

    @store.find 'allocationBundle',
      start_date: @get('startDate')
      end_date: @get('endDate')

  model: (params) ->
    offices = @store.all('allocationBundle').get('firstObject.offices')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    debugger
    {slug: model.get('slug'), startDate: @get('startDate')}

  startDate:(->
    moment(App.projectsUI.get('startDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.startDate')

  endDate:(->
    moment(App.projectsUI.get('endDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.endDate')
