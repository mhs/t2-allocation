App.BundleRoute = Ember.Route.extend
  model: (params) ->
    startDate = params.startDate
    monday = moment(startDate).startOf("week").add("d", 1)
    App.projectsUI.set('date', monday.format("YYYY-MM-DD"))

    @store.find 'allocationBundle',
      start_date: @get('startDate')
      end_date: @get('endDate')

  serialize: (model) ->
    {startDate: @get('startDate')}

  startDate:(->
    moment(App.projectsUI.get('startDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.startDate')

  endDate:(->
    moment(App.projectsUI.get('endDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.endDate')

