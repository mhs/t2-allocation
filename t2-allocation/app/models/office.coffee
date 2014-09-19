`import DS from "ember-data";`
Office = DS.Model.extend
  name: DS.attr('string')
  projects: DS.hasMany('project')
  notes: DS.attr('string')
  people: DS.hasMany('person')

  activePeople: (->
    cutoff = UIGlobal.projectsUI.get('startDate')
    @get('people').filter (item) ->
      date = item.get('endDate')
      !date || date > cutoff
  ).property('App.projectsUI.startDate')

  slug: (->
    @get('name').replace(/\s+/, '-').toLowerCase()
  ).property('name')

`export default Office;`
