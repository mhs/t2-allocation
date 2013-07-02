App.Allocation = DS.Model.extend({
  notes: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  percentage: DS.attr('number'),
  billable: DS.attr('boolean'),
  speculative: DS.attr('boolean'),
  slot: DS.belongsTo('App.Slot'),
  person: DS.belongsTo('App.Person'),
  role: DS.belongsTo('App.Role'),
  office: DS.belongsTo('App.Office'),
  project: DS.belongsTo('App.Project'),

  track: 0
});