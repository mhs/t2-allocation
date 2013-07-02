App.Office = DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  projects: DS.hasMany('App.Project'),
  people: DS.hasMany('App.Person')
});