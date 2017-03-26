// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";
let Office = DS.Model.extend({
  name: DS.attr('string'),
  projects: DS.hasMany('project'),
  notes: DS.attr('string'),
  people: DS.hasMany('person'),
  deleted: DS.attr('boolean'),

  activePeople: (function() {
    let cutoff = UIGlobal.projectsUI.get('startDate');
    return this.get('people').filter(function(item) {
      let date = item.get('endDate');
      return !date || (date > cutoff);
  });}).property('UIGlobal.projectsUI.startDate'),

  slug: (function() {
    return this.get('name').replace(/\s+/, '-').toLowerCase();
  }).property('name')
});

export default Office;
