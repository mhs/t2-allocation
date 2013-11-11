App.Project = App.defineModel 'projects', 'project',
  id: Ember.attr()
  name: Ember.attr()
  notes: Ember.attr()
  billable: Ember.attr()
  vacation: Ember.attr()

  sortOrder: (->
    val = 0
    if !@get('billable')
      val += 1
    if @get('vacation')
      val += 2
    val
  ).property('billable', 'vacation')

  slots: Ember.hasMany("App.Slot",
    key: "slot_ids"
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )
  offices: Ember.hasMany("App.Office",
    key: "office_ids"
  )
