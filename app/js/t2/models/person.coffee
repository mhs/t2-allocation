attr = Ember.attr
belongsTo = Ember.belongsTo
hasMany = Ember.hasMany
App.Person = Ember.Model.extend(
  name: attr()
  notes: attr()
  email: attr()
  unsellable: attr()
  startDate: attr(Date)
  endDate: attr(Date)
  office: belongsTo("App.Office")
  allocations: hasMany("App.Allocation",
    key: "allocation_ids"
  )
)
App.Person.collectionKey = "people"
App.Person.camelizeKeys = true
