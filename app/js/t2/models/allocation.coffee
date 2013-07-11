attr = Ember.attr
belongsTo = Ember.belongsTo
hasMany = Ember.hasMany
App.Allocation = Ember.Model.extend(
  notes: attr()
  startDate: attr(Date)
  endDate: attr(Date)
  billable: attr()
  binding: attr()
  slot: belongsTo("App.Slot")
  person: belongsTo("App.Person")
  project: belongsTo("App.Project")
  track: 0
)
App.Allocation.url = "/api/v1/allocations"
App.Allocation.collectionKey = "allocations"
App.Allocation.camelizeKeys = true
