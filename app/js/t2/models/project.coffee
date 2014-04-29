App.Project = DS.Model.extend
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

App.AvailableProject = App.Project.extend
  availableProject: true

  sortOrder: 4

App.DummyProject = App.Project.extend
  dummyProject: true

  sortOrder: -1

