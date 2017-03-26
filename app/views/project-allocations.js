// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";
import clickedDate from "t2-allocation/utils/clicked-date";

let ProjectAllocationsView = Ember.View.extend({
  trackCount: Ember.computed.alias('controller.trackCount'),

  projectHeight: (function() {
    return `height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`;
  }).property("trackCount"),

  doubleClick(evt) {
    let newStartDate = clickedDate(evt.clientX);
    return this.get('controller').send('addAllocation', newStartDate);
  }
});

export default ProjectAllocationsView;
