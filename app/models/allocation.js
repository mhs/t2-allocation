`import Ember from "ember";`
`import DS from "ember-data";`
Allocation = DS.Model.extend
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  person: DS.belongsTo('person', { async: true })
  role: DS.attr('string')
  project: DS.belongsTo('project')
  billable: DS.attr('boolean')
  binding: DS.attr('boolean')
  notes: DS.attr('string')
  percentAllocated: DS.attr('number')
  likelihood: DS.attr('string')

  conflicts: DS.hasMany('conflict')

  current: (->
    @get("startDate") <= UIGlobal.projectsUI.get("endDate") and @get("endDate") >= UIGlobal.projectsUI.get("startDate")
  ).property("startDate","endDate","UIGlobal.projectsUI.startDate", "UIGlobal.projectsUI.endDate")

  vacation: Ember.computed.alias('project.vacation')

  status: (->
    words = []
    words.push(if @get('billable') then "Billable" else "Non-Billable")
    words.push(@get('likelihood')) if @get('likelihood')
    words.push("Vacation") if @get('vacation')
    words.join(" / ")
  ).property("likelihood", "billable")

  speculative: (->
    @get('likelihood') != '100% Booked' && @get('likelihood') != null
  ).property('likelihood')

`export default Allocation;`
