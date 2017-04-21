// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import { group_by_sorted_name_role } from "t2-allocation/utils/group-by";
import AllocationBoxModel from "t2-allocation/models/allocation-box-model";
import clickedDate from "t2-allocation/utils/clicked-date";

let ProjectController = Ember.Component.extend({
  currentOffice: null,

  trackCount: Ember.computed('currentAllocations.[]', function() {
    return this.get('currentAllocations').mapBy('track').uniq().get('length');
  }),

  allocations: Ember.computed.alias('project.allocations'),
  allocationModal: Ember.inject.service('allocation'),

  currentMonday: (() => moment(UIGlobal.projectsUI.get("date"))).property('UIGlobal.projectsUI.date'),

  selectedAllocations: Ember.computed(
    "currentOffice",
    "allocations.[]",
    "allocations.@each.current",
    function() {
      let allocations = this.get('allocations');
      if (this.get('vacation')) {
        return allocations.filterBy('person.office.id', this.get('currentOffice.id'));
      } else {
        return allocations;
      }
    }
  ),

  currentAllocations: Ember.computed("selectedAllocations", function() {
    let allocations = this.get("selectedAllocations").filterBy("current");

    let trackNo = 0;
    group_by_sorted_name_role(allocations, function(allocs, person) {
      allocs.forEach(alloc => alloc.set("track", trackNo));
      return trackNo++;
    });
    return allocations.map(allocation => {
      return AllocationBoxModel.create({
        content: allocation,
        currentOffice: this.get('currentOffice')});
    }
  );}),

  projectHeight: Ember.computed("trackCount", function() {
    return Ember.String.htmlSafe(`height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`);
  }),

  doubleClick(evt) {
    let newStartDate = clickedDate(evt.clientX);
    return this.send('addAllocation', newStartDate);
  },

  actions: {
    addAllocation(startDate) {
      let attrs = {
        startDate: startDate || (startDate = moment()),
        project: this.get('project'),
        billable: this.get('project.billable'),
        provisional: this.get('project.provisional'),
        binding: this.get('project.billable') || this.get('project.vacation'),
        likelihood: this.get('lastLikelihood'),
        endDate: this.get('lastEndDate')
      };
      return this.get('allocationModal').createAllocation(attrs);
    },

    quickView(allocation) {
      this.get('allocationModal').quickView(allocation);
    },

    editProject() {
      this.sendAction('editProject', this.get('project'));
    },

    editAllocation(allocation) {
      this.get('allocationModal').editAllocation(allocation);
    }
  }
});

export default ProjectController;
