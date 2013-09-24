App.Project = Ember.Model.extend
  id: Ember.attr()
  name: Ember.attr()
  notes: Ember.attr()
  billable: Ember.attr()
  vacation: Ember.attr()
  slots: Ember.hasMany("App.Slot",
    key: "slot_ids"
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )
  offices: Ember.hasMany("App.Office",
    key: "office_ids"
  )

App.Project.url = "#{App.API_BASEURL}/projects"
App.Project.collectionKey = 'projects'
App.Project.rootKey = 'project'
App.Project.adapter = Ember.RESTAdapter.create()
App.Project.camelizeKeys = true
