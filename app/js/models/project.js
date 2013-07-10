var attr = Ember.attr, belongsTo = Ember.belongsTo, hasMany = Ember.hasMany;

App.Project = Ember.Model.extend({
  name: attr(),
  notes: attr(),
  billable: attr(),
  binding: attr(),
  slug: attr(),
  clientPrincipal: belongsTo('App.Person'),
  slots: hasMany('App.Slot', {key: 'slot_ids'}),
  allocations: hasMany('App.Allocation', {key: 'allocation_ids'}),
  offices: hasMany('App.Office', {key: 'office_ids'})
});

App.Project.adapter = Ember.RESTAdapter.create();
App.Project.url  = "/api/v1/projects";
App.Project.collectionKey = "projects";
App.Project.camelizeKeys = true;