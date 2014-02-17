App.clickedDate = (xPosition) ->
  dayOffset = Math.floor((xPosition - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
  currentMonday = moment(App.projectsUI.get("date"))
  moment(currentMonday).add("days", dayOffset).format("YYYY-MM-DD")
