App.ProjectController = Ember.ObjectController.extend
  content: null
  
  # it seems one must declare attributes as null in order to create the binding 
  # when a model has not been specified in a route
  date: null
  daysInWindow: null
  dateBinding: "App.projectsUI.date"
  daysInWindowBinding: "App.projectsUI.daysInWindow"
  trackCount: 0
  
  currentAllocations: (->
    controller = this
    allocations = filterAllocationsByDate(@get("allocations"), controller)
    trackInfo = buildAllocationTracks(allocations, controller)
    controller.set "trackCount", trackInfo["trackCount"]
    trackInfo["allocations"]
  ).property("date", "daysInWindow", "allocations.@each")
  
  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")
)
filterAllocationsByDate = (allocations, controller) ->
  allocations.filter ((item) ->
    (moment(item.get("startDate")) < (moment(controller.get("date")).add("days", controller.get("daysInWindow")))) and (moment(item.get("endDate")) > moment(controller.get("date")))
  ), controller = controller

buildAllocationTracks = (allocations, controller) ->
  people = {}
  trackNo = 0
  trackedAllocations = allocations.map((allocation) ->
    allocation.set "track", trackNo++
    allocation
  )
  allocations: trackedAllocations
  trackCount: trackNo
