`import Ember from "ember";`

QuickLookModalController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeQuickLook"

    edit: ->
      @send "closeQuickLook"
      Ember.run.later @, ( =>
        @send "editAllocation", @get "model")
      , 200

  startDate: (->
    moment(@get('model.startDate')).format "MMM DD"
  ).property('model.startDate')

  endDate: (->
    moment(@get('model.endDate')).format "MMM DD"
  ).property('model.endDate')

`export default QuickLookModalController;`
