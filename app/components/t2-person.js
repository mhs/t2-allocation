import Ember from "ember";
import { group_by_sorted_project } from "t2-allocation/utils/group-by";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import AllocationBoxModel from "t2-allocation/models/allocation-box-model";
import clickedDate from "t2-allocation/utils/clicked-date";

export default Ember.Component.extend({
  officeController: null,
  peopleController: null,
  allocationModal: Ember.inject.service("allocation"),

  currentOffice: Ember.computed.alias("officeController.model"),
  trackCount: Ember.computed("currentAllocations.[]", function() {
    return this.get("currentAllocations").mapBy("track").uniq().get("length");
  }),

  selectedAllocations: Ember.computed(
    "currentOffice",
    "allocations.[]",
    "allocations.@each.current",
    function() {
      return this.get("model.allocations");
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
        currentOffice: this.get("currentOffice")
      });
    });
  }),

  personHeight: Ember.computed("trackCount", function() {
    return Ember.String.htmlSafe(
      `height: ${this.get("trackCount") * ALLOCATION_HEIGHT + 1}px;`
    );
  }),

  _addAllocation(startDate) {
    if (!startDate) {
      startDate = moment();
    }
    return this.get("allocationModal").createAllocation({
      person: this.get("model"),
      startDate
    });
  },

  doubleClick(evt) {
    let newStartDate = clickedDate(evt.clientX);
    return this._addAllocation(newStartDate);
  },

  actions: {
    addAllocation(startDate) {
      this._addAllocation(startDate);
    },
    quickView(allocation) {
      this.get("allocationModal").quickView(allocation);
    },
    editAllocation(allocation) {
      this.get("allocationModal").editAllocation(allocation);
    },
    editPerson() {
      this.sendAction("editPerson", person);
    }
  }
});
