import Ember from 'ember';
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";
let Office = DS.Model.extend({
  name: DS.attr('string'),
  projects: DS.hasMany('project', {
    async: false
  }),
  notes: DS.attr('string'),
  people: DS.hasMany('person', {
    async: false
  }),
  deleted: DS.attr('boolean'),

  activePeople: Ember.computed('UIGlobal.projectsUI.startDate', function() {
    let cutoff = UIGlobal.projectsUI.get('startDate');
    return this.get('people').filter(function(item) {
      let date = item.get('endDate');
      return !date || (date > cutoff);
  });}),

  slug: Ember.computed('name', function() {
    return this.get('name').replace(/\s+/, '-').toLowerCase();
  })
});

export default Office;
