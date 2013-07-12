attr = Ember.attr
belongsTo = Ember.belongsTo
hasMany = Ember.hasMany
App.Slot = Ember.Model.extend(
  startDate: attr(Date)
  endDate: attr(Date)
  project: belongsTo("App.Project")
  allocations: hasMany("App.Allocation",
    key: "allocation_ids"
  )
)
App.Slot.collectionKey = "slots"
App.Slot.camelizeKeys = true
