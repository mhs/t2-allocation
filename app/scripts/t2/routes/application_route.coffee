App.ApplicationRoute = Ember.Route.extend
  beforeModel: (transition)->
    auth = @controllerFor('authentication')
    auth.extractAccessToken()
    if not auth.get('isAuthenticated')
      transition.abort()
      auth.login()

  model: ->
    Ember.RSVP.all([
      App.Office.fetch(),
      App.Project.fetch(),
      App.Person.fetch(),
      App.Allocation.fetch()
    ])

  actions:
    selectOffice: (office)->
      @transitionTo('offices.projects', office)

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

