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
      App.Allocation.fetch(),
      App.Person.fetch()
    ])

  actions:
    selectOffice: (office)->
      @transitionTo('offices.projects', office)

    openModal: (modal) ->
      @render modal,
        into: "application"
        outlet: "modal"

    closeModal: ->
      App.animateModalClose().then (->
        @render "empty",
          into: "application"
          outlet: "modal"
      ).bind(this)

