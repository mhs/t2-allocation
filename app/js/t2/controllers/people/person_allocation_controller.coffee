App.PersonAllocationController = Ember.ObjectController.extend
  needs: ['people']

  office: Ember.computed.alias('project.office')
  currentOffice: Ember.computed.alias('controllers.people.model')

  isNonbilling: (->
    !@get('billable')
  ).property('billable')

  isPartial: (->
    @get('percentAllocated') < 100
  ).property('percentAllocated')

  hint: (->
    "#{@get('project.name')}"
  ).property('office', 'person')

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
