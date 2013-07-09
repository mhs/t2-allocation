App.Slot = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  project: DS.belongsTo('App.Project'),
  allocations: DS.hasMany('App.Allocation')
});
