App.Allocation = DS.Model.extend({
  notes: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  billable: DS.attr('boolean'),
  binding: DS.attr('boolean'),
  slot: DS.belongsTo('App.Slot'),
  person: DS.belongsTo('App.Person'),
  office: DS.belongsTo('App.Office'),
  project: DS.belongsTo('App.Project'),

  track: 0
});
