App.QuickLookModalController = Ember.ObjectController.extend
  editedModel: null
  actions:
    close: ->
      @send "closeModal"

  billableStatus: (->
    if @get('billable') then "Billable" else "Non-billing"
  ).property("billable")

  bindingStatus: (->
    if @get('binding') then "Exclusive" else "Non-exclusive"
  ).property("binding")

  startDate: (->
    moment(@get('model.startDate')).format "MMM DD"
  ).property('model.startDate')

  endDate: (->
    moment(@get('model.endDate')).format "MMM DD"
  ).property('model.endDate')

