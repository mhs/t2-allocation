App.ApplicationRoute = Ember.Route.extend
  actions:
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

