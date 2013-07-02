App.Residency = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  person: DS.belongsTo('App.Person'),
  office: DS.belongsTo('App.Office')
});