// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";
let Conflict = DS.Model.extend({
  allocations: DS.hasMany('allocation', {async: true}),
  person: DS.belongsTo('person', {
    async: false
  }),

  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  percentAllocated: DS.attr('number')
});

export default Conflict;
