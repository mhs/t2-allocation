App.Slot = DS.Model.extend
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  project: DS.belongsTo('project')
  allocations: DS.hasMany('allocation')
