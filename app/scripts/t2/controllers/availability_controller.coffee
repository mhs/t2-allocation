App.AvailabilityController = Ember.ObjectController.extend
  # needs: ['officesProjects']

  #office: Ember.computed.alias('person.office')
  #currentOffice: Ember.computed.alias('controllers.officesProjects.model')

  isExternal: (-> false).property()
  #isExternal: (->
  #  @get('office') != @get('currentOffice')
  #).property('currentOffice', 'office')

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date")).startOf("week")
    startDate = moment(@get("startDate")) || moment()
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")

  hint: (->
    _external = if @get('isExternal') then " (#{@get('office.name')})" else ''
    "#{@get('person.name')}#{_external}"
  ).property('office', 'isExternal', 'person')

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
