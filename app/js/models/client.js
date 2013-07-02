App.Client = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  projects: DS.hasMany('App.Project')
});
