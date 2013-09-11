App.Slot = Ember.Model.extend
  id: Ember.attr()
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
  project: Ember.belongsTo("App.Project",
    key: 'project_id'
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )

App.Slot.url = "#{App.API_BASEURL}/slots"
App.Slot.collectionKey = 'slots'
App.Slot.adapter = Ember.RESTAdapter.create()
App.Slot.camelizeKeys = true
