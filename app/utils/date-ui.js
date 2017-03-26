import Ember from "ember";
import { WIDTH_OF_DESCRIPTOR, WIDTH_OF_DAY } from "t2-allocation/utils/constants";
let DateUI = Ember.Object.extend({
  date: null,
  startDate: (function() {
    return moment(this.date);
  }).property("date"),

  endDate: (function() {
    return moment(this.get('date')).add("days", this.get('daysInWindow'));
  }).property("date","daysInWindow"),

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
