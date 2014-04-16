App.AllocationController = Ember.ObjectController.extend
  needs: ['projects', 'office']

  office: Ember.computed.alias('person.office')
  currentOffice: Ember.computed.alias('controllers.office.model')

  isExternal: (->
    @get('office') != @get('currentOffice')
  ).property('currentOffice', 'office')

  isNonbilling: (->
    !@get('billable')
  ).property('billable')

  isPartial: (->
    @get('percentAllocated') < 100
  ).property('percentAllocated')

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date"))
    startDate = moment(App.dateMunge(@get('startDate')))
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")

  hint: (->
    _external = if @get('isExternal') then " (#{@get('office.name')})" else ''
    "#{@get('person.name')}#{_external}"
  ).property('office', 'isExternal', 'person')

  # to offset zero, an 'extra' day will be removed
  style: (->
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset
      startOffset = 0
    "top: " + (@get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "track")
