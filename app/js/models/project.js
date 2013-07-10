App.Project = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  billable: DS.attr('boolean'),
  binding: DS.attr('boolean'),
  slug: DS.attr('string'),
  clientPrincipal: DS.belongsTo('App.Person'),
  slots: DS.hasMany('App.Slot'),
  allocations: DS.hasMany('App.Allocation'),
  offices: DS.hasMany('App.Office')
});
