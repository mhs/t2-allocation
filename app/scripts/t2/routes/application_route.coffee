App.ApplicationRoute = Ember.Route.extend
  beforeModel: (transition)->
    auth = @controllerFor('authentication')
    auth.extractAccessToken()
    if not auth.get('isAuthenticated')
      transition.abort()
      auth.login()
    @store.find 'allocationBundle',
      start_date: @get('startDate')
      end_date: @get('endDate')

  startDate:(->
    moment(App.projectsUI.get('startDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.startDate')

  endDate:(->
    moment(App.projectsUI.get('endDate')).format "YYYY-MM-DD"
  ).property('App.projectsUI.endDate')

  model: ->
    @store.all('allocationBundle').get('firstObject')

  actions:
    createAllocation: (allocationAttrs={}) ->
      defaults =
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))
      @send 'editAllocation', @store.createRecord('allocation', Ember.merge(defaults, allocationAttrs))

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"

    error: (err) ->
      auth = @controllerFor('authentication')
      auth.login()

    openModal: (modal) ->
      @render modal,
        into: "application"
        outlet: "modal"

    closeModal: ->
      self = @
      App.animateModalClose().then ->
        self.render "empty",
          into: "application"
          outlet: "modal"
