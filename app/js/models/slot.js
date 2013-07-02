App.Slot = DS.Model.extend({
  notes: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  size: DS.attr('number'),
  speculative: DS.attr('boolean'),
  project: DS.belongsTo('App.Project'),
  allocations: DS.hasMany('App.Allocation')
});