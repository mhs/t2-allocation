App.Allocation = App.defineModel 'allocations', 'allocation',
  id: Ember.attr()
  notes: Ember.attr()
  startDate: Ember.attr(App.TextDate)
  endDate: Ember.attr(App.TextDate)
  billable: Ember.attr()
  binding: Ember.attr()
  slot: Ember.belongsTo("App.Slot",
    key: 'slot_id'
  )
  person: Ember.belongsTo("App.Person",
    key: 'person_id'
  )
  project: Ember.belongsTo("App.Project",
    key: 'project_id'
  )

  init: ->
    @_super()
    @on('didDeleteRecord', ->
      App.projectsUI.incrementProperty('allocationUpdates')
    ).on('didSaveRecord', ->
      App.projectsUI.incrementProperty('allocationUpdates')
    )

  track: 0
  current: (->
    @get("startDate") < App.projectsUI.get("endDate") and @get("endDate") > App.projectsUI.get("startDate")
  ).property("startDate","endDate","App.projectsUI.startDate", "App.projectsUI.endDate")
  duration: (->
    start = moment(@get("startDate")) || moment(@get("endDate")) || moment()
    end = moment(@get("endDate")) || moment(@get("startDate")) || moment()
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")
