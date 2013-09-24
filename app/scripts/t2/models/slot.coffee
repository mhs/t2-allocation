App.Slot = App.defineModel 'slots', 'slot',
  id: Ember.attr()
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
  project: Ember.belongsTo("App.Project",
    key: 'project_id'
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )
