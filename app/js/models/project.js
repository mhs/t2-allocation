App.Project = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  billable: DS.attr('boolean'),
  speculative: DS.attr('boolean'),
  client: DS.belongsTo('App.Client'),
  slots: DS.hasMany('App.Slot'),
  allocations: DS.hasMany('App.Allocation'),
  office: DS.belongsTo('App.Office')
});
