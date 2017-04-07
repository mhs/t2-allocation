// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import DS from "ember-data";
let AllocationBundle = DS.Model.extend({
  projects: DS.hasMany('project', {
    async: false
  }),
  offices: DS.hasMany('office', {
    async: false
  }),
  people: DS.hasMany('person', {
    async: false
  }),
  allocations: DS.hasMany('allocation', {
    async: false
  }),
  availabilities: DS.hasMany('availability', {
    async: false
  })
});

export default AllocationBundle;
