App.Office = App.defineModel 'offices', 'office',
  id: Ember.attr()
  name: Ember.attr()
  notes: Ember.attr()
  projects: Ember.hasMany("App.Project",
    key: "project_ids"
  )
  people: Ember.hasMany("App.Person",
    key: "person_ids"
  )
  slug: (->
    @get('name').replace(/\s+/, '-').toLowerCase()
  ).property('name')
