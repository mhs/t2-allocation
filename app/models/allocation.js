// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import DS from "ember-data";
let Allocation = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  person: DS.belongsTo('person', { async: true }),
  role: DS.attr('string'),
  project: DS.belongsTo('project', {
    async: false
  }),
  billable: DS.attr('boolean'),
  binding: DS.attr('boolean'),
  notes: DS.attr('string'),
  percentAllocated: DS.attr('number'),
  likelihood: DS.attr('string'),

  conflicts: DS.hasMany('conflict', {
    async: false
  }),

  current: Ember.computed(
    "startDate",
    "endDate",
    "UIGlobal.projectsUI.startDate",
    "UIGlobal.projectsUI.endDate",
    function() {
      return (this.get("startDate") <= UIGlobal.projectsUI.get("endDate")) && (this.get("endDate") >= UIGlobal.projectsUI.get("startDate"));
    }
  ),

  vacation: Ember.computed.alias('project.vacation'),

  status: Ember.computed("likelihood", "billable", function() {
    let words = [];
    words.push(this.get('billable') ? "Billable" : "Non-Billable");
    if (this.get('likelihood')) { words.push(this.get('likelihood')); }
    if (this.get('vacation')) { words.push("Vacation"); }
    return words.join(" / ");
  }),

  speculative: Ember.computed('likelihood', function() {
    return (this.get('likelihood') !== '100% Booked') && (this.get('likelihood') !== null);
  })
});

export default Allocation;
