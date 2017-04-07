// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { group_by_sorted_project } from "t2-allocation/utils/group-by";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import AllocationBoxModel from "t2-allocation/models/allocation-box-model";

let PersonController = Ember.Controller.extend({
  officeController: Ember.inject.controller('office'),
  peopleController: Ember.inject.controller('people'),
  currentOffice: Ember.computed.alias('officeController.model'),
  trackCount: Ember.computed('currentAllocations.[]', function() {
    return this.get('currentAllocations').mapBy('track').uniq().get('length');
  }),

  selectedAllocations: Ember.computed(
    "currentOffice",
    "allocations.[]",
    "allocations.@each.current",
    function() {
      return this.get('allocations');
    }
  ),

  currentAllocations: Ember.computed("selectedAllocations", function() {
    let allocations = this.get("selectedAllocations").filterBy("current");

    let trackNo = 0;
    group_by_sorted_project(allocations, function(allocs, person) {
      allocs.forEach(alloc => alloc.set("track", trackNo));
      return trackNo++;
    });
    return allocations.map(allocation => {
      return AllocationBoxModel.create({
        content: allocation,
        currentOffice: this.get('currentOffice')});
    }
  );}),

  personHeight: Ember.computed("trackCount", function() {
    return Ember.String.htmlSafe(`height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`);
  }),

  actions: {
    addAllocation(startDate) {
      if (!startDate) { startDate = moment(); }
      return this.send('createAllocation', {person: this.get('model') , startDate});
    }
  }
});

export default PersonController;
