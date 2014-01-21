App.ProjectAllocationsView = Ember.View.extend
  doubleClick: (evt) ->
    newStartDate = @clickedDate evt.clientX
    @get('controller').send 'addAllocation', newStartDate


  clickedDate: (xPosition) ->
    dayOffset = Math.floor((xPosition - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
    currentMonday = moment(App.projectsUI.get("date"))
    new Date(moment(currentMonday).add("days", dayOffset).format("YYYY-MM-DD"))


