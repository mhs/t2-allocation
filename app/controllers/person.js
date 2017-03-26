// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { group_by_sorted_project } from "t2-allocation/utils/group-by";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import AllocationBoxModel from "t2-allocation/models/allocation-box-model";

let PersonController = Ember.ObjectController.extend({
  needs: ['people', 'office'],
  currentOffice: Ember.computed.alias('controllers.office.model'),

  trackCount: 0,

  selectedAllocations: (function() {
    return this.get('allocations');
  }).property("currentOffice", "allocations.[]", "allocations.@each.current"),

  currentAllocations: (function() {
    let allocations = this.get("selectedAllocations").filterProperty("current");

    let trackNo = 0;
    group_by_sorted_project(allocations, function(allocs, person) {
      allocs.forEach(alloc => alloc.set("track", trackNo));
      return trackNo++;
    });
    this.set("trackCount", trackNo);
    return allocations.map(allocation => {
      return AllocationBoxModel.create({
        content: allocation,
        currentOffice: this.get('currentOffice')});
    }
  );}).property("selectedAllocations"),

  personHeight: (function() {
    return `height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`;
  }).property("trackCount"),

  actions: {
    addAllocation(startDate) {
      if (!startDate) { startDate = moment(); }
      return this.send('createAllocation', {person: this.get('model') , startDate});
    }
  }});

export default PersonController;
