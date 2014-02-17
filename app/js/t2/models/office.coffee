App.Office = DS.Model.extend
  name: DS.attr('string')
  projects: DS.hasMany('project')
  notes: DS.attr('string')
  people: DS.hasMany('person')

  activePeople: (->
    cutoff = App.projectsUI.get('startDate')
    @get('people').filter (item) ->
      date = item.get('endDate')
      !date || date > cutoff
  ).property('App.projectsUI.startDate')

  slug: (->
    @get('name').replace(/\s+/, '-').toLowerCase()
  ).property('name')
