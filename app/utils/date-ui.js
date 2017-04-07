// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { WIDTH_OF_DESCRIPTOR, WIDTH_OF_DAY } from "t2-allocation/utils/constants";
let DateUI = Ember.Object.extend({
  date: null,
  startDate: Ember.computed("date", function() {
    return moment(this.date);
  }),

  endDate: Ember.computed("date", "daysInWindow", function() {
    return moment(this.get('date')).add("days", this.get('daysInWindow'));
  }),

  calculateWindow() {
    return Math.ceil((window.innerWidth - WIDTH_OF_DESCRIPTOR) / WIDTH_OF_DAY);},

  init() {
    this._super();
    return this.set('daysInWindow', this.calculateWindow());
  }
});

let projectsUI = DateUI.create({
  // initialize on the Monday of the current week
  date: moment().startOf("week").add('d', 1).format("YYYY-MM-DD")});

window.UIGlobal = {};
window.UIGlobal.projectsUI = projectsUI;
export { DateUI, projectsUI };
