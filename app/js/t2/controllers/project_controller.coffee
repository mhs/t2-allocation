App.ProjectController = Ember.ObjectController.extend
  content: null
  
  trackCount: 0
  
  currentAllocations: (->
    allocations = @get("allocations").filterProperty("current")
    trackNo = 0
    allocations.forEach (allocation) ->
      allocation.set "track", trackNo++
    @set "trackCount", trackNo
    allocations
  ).property("allocations.[]", "allocations.@each.current")
  
  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")
