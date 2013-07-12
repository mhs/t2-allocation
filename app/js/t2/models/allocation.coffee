App.Allocation = Ember.Model.extend
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
