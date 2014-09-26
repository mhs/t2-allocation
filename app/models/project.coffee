`import DS from "ember-data";`
Project = DS.Model.extend
  name: DS.attr('string')
  vacation: DS.attr('boolean')
  billable: DS.attr('boolean', {defaultValue: true})
  provisional: DS.attr('boolean')

  offices: DS.hasMany('office')
  allocations: DS.hasMany('allocation')

  startDate: DS.attr('date')
  endDate: DS.attr('date')

  sortOrder: (->
    val = 0
    if !@get('billable')
      val += 1
    if @get('vacation')
      val += 2
    val
  ).property('billable', 'vacation')

`export default Project;`
