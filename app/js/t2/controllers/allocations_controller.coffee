App.AllocationController = Ember.ObjectController.extend
  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date")).startOf("week")
    startDate = moment(@get("startDate")) || moment()
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")

  # to offset zero, an 'extra' day will be removed
  style: (->
    scale = 16
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset - 1
      startOffset = 0
    "top: " + (@get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "track")
