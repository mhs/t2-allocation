// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import DS from "ember-data";
let AllocationBundle = DS.Model.extend({
  projects: DS.hasMany('project'),
  offices: DS.hasMany('office'),
  people: DS.hasMany('person'),
  allocations: DS.hasMany('allocation'),
  availabilities: DS.hasMany('availability')
});

export default AllocationBundle;
