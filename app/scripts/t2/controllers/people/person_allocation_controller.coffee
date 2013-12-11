App.PersonAllocationController = Ember.ObjectController.extend
  needs: ['people']

  office: Ember.computed.alias('project.office')
  currentOffice: Ember.computed.alias('controllers.people.model')

  isNonbilling: (->
    !@get('billable')
  ).property('billable')

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date"))
    startDate = moment(@get("startDate")) || moment()
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")

  hint: (->
    "#{@get('project.name')}"
  ).property('office', 'person')

  # to offset zero, an 'extra' day will be removed
  style: (->
    scale = 16
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset
      startOffset = 0
    "top: " + (@get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "track")
