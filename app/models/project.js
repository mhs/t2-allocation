`import DS from "ember-data";`
`import ENV from "t2-allocation/config/environment";`

Project = DS.Model.extend
  name: DS.attr('string')
  vacation: DS.attr('boolean')
  billable: DS.attr('boolean', {defaultValue: true})

  offices: DS.hasMany('office')
  allocations: DS.hasMany('allocation', { async: true })

  startDate: DS.attr('date')
  endDate: DS.attr('date')


  #flat-maps the offices' active people
  _activePeople: Ember.computed 'offices.@each.activePeople', ->
    [].concat.apply([], @get('offices').mapBy('activePeople')) 

  peopleSort: ['name:asc']
  activePeople: Ember.computed.sort '_activePeople', 'peopleSort'

  sortOrder: (->
    val = 0
    if !@get('billable')
      val += 1
    if @get('vacation')
      val += 2
    val
  ).property('billable', 'vacation')

  showUrl:(->
    ENV.PROJECTS_URL + @get('id')
  ).property()


`export default Project;`
