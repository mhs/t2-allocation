ALLOCATION_HEIGHT = 16
TIME_SCALE = 16
App.AllocationController = Ember.ObjectController.extend
  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date")).startOf("week")
    startDate = moment(@get("startDate")) || moment()
    moment(startDate).diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")
  
  # when the start date is the same as the end date, we need to show one day, not zero.
  duration: (->
    moment(@get("endDate")).diff(moment(@get("startDate")), "days") + 1
  ).property("startDate", "endDate")
  
  # to offset zero, an 'extra' day will be removed
  style: (->
    scale = 16
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset - 1
      startOffset = 0
    "top: " + (@get("track") * ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * TIME_SCALE) + "px; " + "width: " + (duration * TIME_SCALE) + "px; "
  ).property("startOffset", "duration")
