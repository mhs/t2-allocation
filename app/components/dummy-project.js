// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ALLOCATION_HEIGHT from "t2-allocation/utils/constants";

let DummyProjectController  = Ember.Component.extend({
  trackCount: 1,

  projectHeight: Ember.computed("trackCount", function() {
    return `height: ${(this.get("trackCount") * ALLOCATION_HEIGHT) + 1}px;`;
  })
});

export default DummyProjectController ;
