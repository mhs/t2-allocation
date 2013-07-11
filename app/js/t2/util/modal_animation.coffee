App.animateModalClose = ->
  deferred = Ember.RSVP.defer()
  $(".modal.in").removeClass "in"
  $(".modal-backdrop.in").removeClass "in"
  setTimeout (->
    deferred.resolve()
  ), App.DEFAULT_CSS_TRANSITION_DURATION_MS
  deferred.promise

App.animateModalOpen = ->
  deferred = Ember.RSVP.defer()
  $(".modal").addClass "in"
  $(".modal-backdrop").addClass "in"
  setTimeout (->
    deferred.resolve "ok"
  ), App.DEFAULT_CSS_TRANSITION_DURATION_MS
  deferred.promise
