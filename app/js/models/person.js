App.Person = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  email: DS.attr('string'),
  assignable: DS.attr('boolean'),
  role: DS.belongsTo('App.Role'),
  office: DS.belongsTo('App.Office'),
  allocations: DS.hasMany('App.Allocation')
});