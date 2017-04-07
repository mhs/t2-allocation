import Ember from "ember";
import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['allocation', 'available'],
  classNameBindings: ['isExternal:external'],

  isExternal: Ember.computed.alias('model.isExternal'),
  allocation: Ember.computed.alias('model'),
  startOffset: Ember.computed.alias('model.startOffset'),
  duration: Ember.computed.alias('model.duration'),
  track: Ember.computed.alias('model.track'),

  doubleClick(evt) {
    let allocationInfo = {
      startDate: this.get('allocation.startDate'),
      endDate: this.get('allocation.endDate'),
      person: this.get('allocation.person')
    };
    this.sendAction('createAllocation', allocationInfo);
    return false;
  }, // to keep from bubbling up

  // to offset zero, an 'extra' day will be removed
  style: Ember.computed("startOffset", "duration", "track", function() {
    let scale = 16;
    let startOffset = this.get("startOffset");
    let duration = this.get("duration");
    if (startOffset < 0) {
      duration += startOffset;
      startOffset = 0;
    }
    return Ember.String.htmlSafe(`top: ${this.get("track") * ALLOCATION_HEIGHT}px; left: ${startOffset * WIDTH_OF_DAY}px; width: ${duration * WIDTH_OF_DAY}px; `);
  }),

  isExternal: (() => false).property(),

  isPartial: Ember.computed('percentAllocated', function() {
    return this.get('percentAllocated') < 100;
  }),

  hint: Ember.computed('office', 'isExternal', 'person', function() {
    let _external = this.get('isExternal') ? ` (${this.get('office.name')})` : '';
    return `${this.get('person.name')}${_external}`;
  }),

  startOffset: Ember.computed("UIGlobal.projectsUI.date", "project.startDate", function() {
    let currentMonday = moment(UIGlobal.projectsUI.get("date"));
    let startDate = moment(this.get("project.startDate")) || moment();
    return startDate.diff(currentMonday, "days");
  }),

  duration: Ember.computed("startDate", "endDate", function() {
    let start = moment(this.get("startDate"));
    let end = moment(this.get("endDate"));
    return end.diff(start, "days") + 1;
  })
});
