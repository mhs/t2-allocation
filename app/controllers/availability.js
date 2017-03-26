// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let AvailabilityController = Ember.ObjectController.extend({

  isExternal: (() => false).property(),

  isPartial: (function() {
    return this.get('percentAllocated') < 100;
  }).property('percentAllocated'),

  hint: (function() {
    let _external = this.get('isExternal') ? ` (${this.get('office.name')})` : '';
    return `${this.get('person.name')}${_external}`;
  }).property('office', 'isExternal', 'person'),

  startOffset: (function() {
    let currentMonday = moment(UIGlobal.projectsUI.get("date"));
    let startDate = moment(this.get("startDate")) || moment();
    return startDate.diff(currentMonday, "days");
  }).property("UIGlobal.projectsUI.date", "startDate"),

  duration: (function() {
    let start = moment(this.get("startDate"));
    let end = moment(this.get("endDate"));
    return end.diff(start, "days") + 1;
  }).property("startDate", "endDate")
});

export default AvailabilityController;
