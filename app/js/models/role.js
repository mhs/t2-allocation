App.Role = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  people: DS.hasMany('App.Person'),
  allocations: DS.hasMany('App.Allocation')
});