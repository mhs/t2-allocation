import Ember from "ember";

export default Ember.Service.extend({
  store: Ember.inject.service(),

  // whatever allocation is being edited or viewed by the
  // quicklook or edit modal
  activeAllocation: null,

  activeModal: null, // either allocations-modal or quick-look-modal

  startDate: Ember.computed('UIGlobal.projectsUI.startDate', function () {
    return moment(UIGlobal.projectsUI.get("startDate")).format("YYYY-MM-DD");
  }),

  endDate: Ember.computed('UIGlobal.projectsUI.endDate', function () {
    return moment(UIGlobal.projectsUI.get("endDate")).format("YYYY-MM-DD");
  }),

  updateBundle() {
    return this.get('store').query("allocationBundle", {
      start_date: this.get("startDate"),
      end_date: this.get("endDate")
    });
  },

  editAllocation(allocation) {
    this.setProperties({
      activeAllocation: allocation,
      activeModal: "allocations-modal"
    });
  },

  closeModal() {
    this.setProperties({
      activeAllocation: null,
      activeModal: null
    });
  },

  createAllocation(allocationAttrs = {}) {
    let defaults = {
      startDate: moment(),
      endDate: moment().add(2, "weeks")
    };
    let newAllocation = this.get('store').createRecord(
      "allocation",
      Ember.merge(defaults, allocationAttrs)
    );
    this.editAllocation(newAllocation);
  },

  quickView(allocation) {
    this.setProperties({
      activeAllocation: allocation,
      activeModal: "quick-look-modal"
    });
  }
});
