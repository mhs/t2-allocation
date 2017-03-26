import Ember from "ember";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import { group_by_sorted_name_role } from "t2-allocation/utils/group-by";
import AllocationBoxModel from "t2-allocation/models/allocation-box-model";

let ProjectController = Ember.ObjectController.extend({
  needs: ['office', 'projects'],
  currentOffice: Ember.computed.alias('controllers.office.model'),

  trackCount: 0,

  allocations: Ember.computed.alias('model.allocations'),

  currentMonday: (() => moment(UIGlobal.projectsUI.get("date"))).property('UIGlobal.projectsUI.date'),

  selectedAllocations: (function() {
    let allocations = this.get('allocations');
    if (this.get('vacation')) {
      return allocations.filterBy('person.office.id', this.get('currentOffice.id'));
    } else {
      return allocations;
    }
  }).property("currentOffice", "allocations.[]", "allocations.@each.current"),

  currentAllocations: (function() {
    let allocations = this.get("selectedAllocations").filterProperty("current");

    let trackNo = 0;
    group_by_sorted_name_role(allocations, function(allocs, person) {
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

  projectHeight: (function() {
    return `height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`;
  }).property("trackCount"),

  actions: {
    addAllocation(startDate) {
      let attrs = {
        startDate: startDate || (startDate = moment()),
        project: this.get('model'),
        billable: this.get('model.billable'),
        provisional: this.get('model.provisional'),
        binding: this.get('model.billable') || this.get('model.vacation'),
        likelihood: this.get('controllers.projects.lastLikelihood'),
        endDate: this.get('controllers.projects.lastEndDate')
      };
      return this.send('createAllocation', attrs);
    }
  }
});

export default ProjectController;
