// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";
import ENV from "t2-allocation/config/environment";
let { attr } = DS;
let Person = DS.Model.extend({
  name: attr('string'),
  role: attr('string'),
  notes: attr('string'),
  email: attr('string'),
  unsellable: attr('boolean'),
  startDate: attr('date'),
  endDate: attr('date'),
  office: DS.belongsTo('office'),
  allocations: DS.hasMany('allocation'),
  percentBillable: DS.attr('number'),

  mergedAllocations: (function() {
    let allocations = this.get('allocations').filterProperty('current').toArray().sort((a,b)=> a.get('startDate') - b.get('startDate'));
    let merged = [];
    let start = null;
    let end = null;
    for (let allocation of Array.from(allocations)) {
      let newStart = allocation.get('startDate');
      let newEnd = allocation.get('endDate');
      if (!start) { start = newStart; }
      if (!end) { end = newEnd; }
      if (end < newStart) {
        // if the start is beoyond the previous end, there is a new allocation space
        merged.push({startDate: start, endDate: end});
        start = newStart;
        end = newEnd;
      } else {
        // if the start is before, the try and stretch the end
        if (end < newEnd) {
          end = newEnd;
        }
      }
    }
    merged.push({startDate: start, endDate: end});
    return merged;
  }).property("UIGlobal.projectsUI.startDate", "UIGlobal.projectsUI.endDate",'allocations.[]','allocations.@each.current'),

  editUrl:(function() {
    return ENV.PEOPLE_URL + this.get('id') + '/edit';
  }).property()
});

export default Person;
