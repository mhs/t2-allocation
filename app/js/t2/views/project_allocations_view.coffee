App.ProjectAllocationsView = Ember.View.extend

  trackCount: Ember.computed.alias('controller.trackCount')

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  doubleClick: (evt) ->
    newStartDate = App.clickedDate(evt.clientX)
    @get('controller').send 'addAllocation', newStartDate
