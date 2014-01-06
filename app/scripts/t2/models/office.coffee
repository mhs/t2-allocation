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

  activePeople: (->
    cutoff = App.projectsUI.get('startDate')
    @get('people').filter (item) ->
      date = item.get('endDate')
      !date || date > cutoff
  ).property('App.projectsUI.startDate')

  slug: (->
    @get('name').replace(/\s+/, '-').toLowerCase()
  ).property('name')
