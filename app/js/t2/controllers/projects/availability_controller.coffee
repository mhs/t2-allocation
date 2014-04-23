App.AvailabilityController = Ember.ObjectController.extend

  isExternal: (-> false).property()

  isPartial: (->
    @get('percentAllocated') < 100
  ).property('percentAllocated')

  hint: (->
    _external = if @get('isExternal') then " (#{@get('office.name')})" else ''
    "#{@get('person.name')}#{_external}"
  ).property('office', 'isExternal', 'person')

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date"))
    startDate = moment(@get("startDate")) || moment()
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "startDate")

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")
