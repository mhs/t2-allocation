App.Office = Ember.Model.extend
  name: Ember.attr()
  notes: Ember.attr()
  projects: Ember.hasMany("App.Project",
    key: "project_ids"
  )
  people: Ember.hasMany("App.Person",
    key: "person_ids"
  )

App.Office.collectionKey = "offices"
App.Office.camelizeKeys = true
