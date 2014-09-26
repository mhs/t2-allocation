`import Ember from "ember";`
`import DEFAULT_CSS_TRANSITION_DURATION_MS from 't2-allocation/utils/constants';`

animateModalClose = ->
  deferred = Ember.RSVP.defer()
  $(".modal").removeClass "in"
  $(".modal-backdrop").removeClass "in"
  setTimeout (->
    deferred.resolve()
  ), DEFAULT_CSS_TRANSITION_DURATION_MS
  deferred.promise

animateModalOpen = ->
  deferred = Ember.RSVP.defer()
  $(".modal-backdrop").addClass "in"
  $(".modal").addClass "in"
  setTimeout (->
    deferred.resolve "ok"
  ), DEFAULT_CSS_TRANSITION_DURATION_MS
  deferred.promise

`export { animateModalOpen, animateModalClose };`
