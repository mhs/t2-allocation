App.ConflictController = Ember.ObjectController.extend

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date"))
    startDate = moment(App.dateMunge(@get('startDate')))
    startDate.diff(currentMonday, "days")
  ).property('App.projectsUI.date', 'startDate')

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property('startDate', 'endDate')

  # HACK - databound templates plz!
  #
  hint: null
  _hint: (->
    @get('allocations').then (allocations) =>
      @set("hint", allocations.mapProperty('project.name').join(', '))
  ).observes('allocations.[]')
