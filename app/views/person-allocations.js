import Ember from "ember";
import clickedDate from "t2-allocation/utils/clicked-date";

let PersonAllocationsView = Ember.View.extend({
  doubleClick(evt) {
    let newStartDate = clickedDate(evt.clientX);
    return this.get('controller').send('addAllocation', newStartDate);
  }
});

export default PersonAllocationsView;
