`import DS from "ember-data";`
Office = DS.Model.extend
  name: DS.attr('string')
  projects: DS.hasMany('project')
  notes: DS.attr('string')
  people: DS.hasMany('person')
  deleted: DS.attr('boolean')

  activePeople: (->
    cutoff = UIGlobal.projectsUI.get('startDate')
    @get('people').filter (item) ->
      date = item.get('endDate')
      !date || date > cutoff
  ).property('UIGlobal.projectsUI.startDate')

  slug: (->
    @get('name').replace(/\s+/, '-').toLowerCase()
  ).property('name')

`export default Office;`
