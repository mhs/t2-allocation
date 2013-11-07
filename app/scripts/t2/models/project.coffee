App.Project = App.defineModel 'projects', 'project',
  id: Ember.attr()
  name: Ember.attr()
  notes: Ember.attr()
  billable: Ember.attr()
  vacation: Ember.attr()

  sortOrder: 0
  slots: Ember.hasMany("App.Slot",
    key: "slot_ids"
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )
  offices: Ember.hasMany("App.Office",
    key: "office_ids"
  )
