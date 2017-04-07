// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { group_by_sorted_name } from "t2-allocation/utils/group-by";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import clickedDate from "t2-allocation/utils/clicked-date";

export default Ember.Component.extend({
  project: null,
  startDate: Ember.computed.alias('UIGlobal.projectsUI.startDate'),
  endDate: Ember.computed.alias('UIGlobal.projectsUI.endDate'),
  selectedOffice: null,
  people: Ember.computed.alias('selectedOffice.people'),
  projectHeight: Ember.computed("trackCount", function() {
    return `height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`;
  }),

  trackCount: 0,
  availabilities: Ember.computed('people', 'allAvailabilities.[]', function() {
    let people = this.get('people');
    return this.get('allAvailabilities').filter(availability => people.contains(availability.get('person')));}),

  allAvailabilities: Ember.computed('project.bundle.availabilities.@each.id', function() {
    return this.get('project.bundle.availabilities');
  }),

  currentAvailabilities: Ember.computed('availabilities.[]', function() {
    let availabilities = this.get("availabilities");

    let trackNo = 0;
    group_by_sorted_name(availabilities, function(avs, person) {
      avs.forEach(av => av.set("track", trackNo));
      return trackNo++;
    });
    this.set("trackCount", trackNo);
    return availabilities;
  }),

  doubleClick(evt) {
    let newStartDate = clickedDate(evt.clientX);
    return this.sendAction('addAllocation', newStartDate);
  },


  actions: {
    addAllocation() {
      return this.send('createAllocation', {});
    }
  }});
