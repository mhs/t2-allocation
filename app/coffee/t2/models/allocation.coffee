App.Allocation = Ember.Model.extend
  id: Ember.attr()
  notes: Ember.attr()
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
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

  track: 0
  current: (->
    @get("startDate") < App.projectsUI.get("endDate") and @get("endDate") > App.projectsUI.get("startDate")
  ).property("startDate","endDate","App.projectsUI.startDate", "App.projectsUI.endDate")
  duration: (->
    start = moment(@get("startDate")) || moment(@get("endDate")) || moment()
    end = moment(@get("endDate")) || moment(@get("startDate")) || moment()
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

App.Allocation.url = "#{App.API_BASEURL}/allocations"
App.Allocation.collectionKey = 'allocations'
App.Allocation.adapter = Ember.RESTAdapter.create();
