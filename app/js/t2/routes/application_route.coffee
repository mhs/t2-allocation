App.ApplicationRoute = Ember.Route.extend
  events:
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

