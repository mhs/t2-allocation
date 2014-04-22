App.Conflict = DS.Model.extend

  allocations: DS.hasMany('allocation', {async: true})
  person: DS.belongsTo('person')

  startDate: DS.attr('date')
  endDate: DS.attr('date')
  percentAllocated: DS.attr('number')

