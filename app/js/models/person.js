App.Person = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  email: DS.attr('string'),
  unsellable: DS.attr('boolean'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  office: DS.belongsTo('App.Office'),
  allocations: DS.hasMany('App.Allocation')
});
