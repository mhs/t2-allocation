import Ember from "ember";
import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";

let AvailabilityView = Ember.View.extend({
  attributeBindings: ['style'],
  classNames: ['allocation', 'available'],
  classNameBindings: ['isExternal:external'],

  isExternal: Ember.computed.alias('controller.isExternal'),
  allocation: Ember.computed.alias('controller.model'),
  startOffset: Ember.computed.alias('controller.startOffset'),
  duration: Ember.computed.alias('controller.duration'),
  track: Ember.computed.alias('controller.track'),

  doubleClick(evt) {
    let allocationInfo = {
      startDate: this.get('allocation.startDate'),
      endDate: this.get('allocation.endDate'),
      person: this.get('allocation.person')
    };
    this.get('controller').send('createAllocation', allocationInfo);
    return false;
  }, // to keep from bubbling up

  // to offset zero, an 'extra' day will be removed
  style: (function() {
    let scale = 16;
    let startOffset = this.get("startOffset");
    let duration = this.get("duration");
    if (startOffset < 0) {
      duration += startOffset;
      startOffset = 0;
    }
    return `top: ${this.get("track") * ALLOCATION_HEIGHT}px; left: ${startOffset * WIDTH_OF_DAY}px; width: ${duration * WIDTH_OF_DAY}px; `;
  }).property("startOffset", "duration", "track")
});

export default AvailabilityView;
