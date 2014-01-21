App.ProjectAllocationsView = Ember.View.extend
  doubleClick: (evt) ->
    newStartDate = App.clickedDate(evt.clientX)
    @get('controller').send 'addAllocation', newStartDate
