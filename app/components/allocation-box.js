// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";
import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";

let cssPx = (name, val) => `${name}: ${val}px; `;

let AllocationBox = Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['allocation'],
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling', 'speculative', 'role:role'],

  //external properties
  currentOffice: null,
  allocation: null,
  currentMonday: null,
  index: 0,

  //calculated properties
  person: Ember.computed.alias('allocation.person'),
  billable: Ember.computed.alias('allocation.billable'),
  office: Ember.computed.alias('allocation.person.office'),
  percentAllocated: Ember.computed.alias('allocation.percentAllocated'),
  startDate: Ember.computed.alias('allocation.startDate'),
  endDate: Ember.computed.alias('allocation.endDate'),
  role: Ember.computed.alias('allocation.role'),
  speculative: Ember.computed.alias('allocation.speculative'),

  isNonBilling: Ember.computed.not('billable'),

  isPartial: Ember.computed.lt('percentAllocated', 100),

  isExternal: Ember.computed('currentOffice', 'office', function() {
    return this.get('office') !== this.get('currentOffice');
  }),

  style: Ember.computed("topOffset", "leftOffset", "boxWidth", function() {
    return cssPx('top', this.get('topOffset')) +
    cssPx('left', this.get('leftOffset')) +
    cssPx('width', this.get('boxWidth'));
  }),

  boxWidth: Ember.computed('duration', 'startOffset', function() {
    let startOffset = this.get("startOffset");
    let duration = this.get("duration");
    if (startOffset < 0) {
      duration += startOffset; // startOffset is negative
    }
    return duration * WIDTH_OF_DAY;
  }),

  topOffset: Ember.computed('index', function() {
    return this.get('index') * ALLOCATION_HEIGHT;
  }),

  leftOffset: Ember.computed('startOffset', function() {
    let startOffset = this.get("startOffset");
    if (startOffset < 0) {
      return 0;
    } else {
      return startOffset * WIDTH_OF_DAY;
    }
  }),

  startOffset: Ember.computed("currentMonday", "startDate", function() {
    let startDate = moment(dateMunge(this.get('startDate')));
    return startDate.diff(this.get('currentMonday'), "days");
  }),

  duration: Ember.computed("startDate", "endDate", function() {
    let start = moment(this.get("startDate"));
    let end = moment(this.get("endDate"));
    return end.diff(start, "days") + 1;
  }),

  clicks: [],

  //event hooks
  click(evt) {
    this.clicks.push(Ember.run.later(this, function() {
      return this.sendAction('clicked', this.get('allocation'));
    }
    , 250)
    );
    return false;
  }, // to keep from bubbling up

  doubleClick(evt) {
    this.clicks.map(click => Ember.run.cancel(click));
    this.clicks = [];
    this.sendAction('doubleClicked', this.get('allocation'));
    return false;
  }
}); // to keep from bubbling up


export default AllocationBox;
