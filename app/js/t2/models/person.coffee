App.Person = Ember.Model.extend
  name: Ember.attr()
  notes: Ember.attr()
  email: Ember.attr()
  unsellable: Ember.attr()
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
  office: Ember.belongsTo("App.Office",
    key: 'office_id'
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )

App.Person.collectionKey = "people"
App.Person.camelizeKeys = true
