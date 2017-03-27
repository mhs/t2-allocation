// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";
import { WIDTH_OF_DAY } from "t2-allocation/utils/constants";

let ConflictController = Ember.Component.extend({
  attributeBindings: ['style', 'title'],
  classNames: ['conflict'],

  parentOffset: null,
  conflict: null,

  startOffset: (function() {
    let currentMonday = moment(UIGlobal.projectsUI.get("date"));
    let startDate = moment(dateMunge(this.get('conflict.startDate')));
    return startDate.diff(currentMonday, "days");
  }).property('UIGlobal.projectsUI.date', 'conflict.startDate'),

  duration: (function() {
    let start = moment(this.get("conflict.startDate"));
    let end = moment(this.get("conflict.endDate"));
    return end.diff(start, "days") + 1;
  }).property('conflict.startDate', 'conflict.endDate'),

  hint: (function() {
    return this.get('conflict.allocations').mapProperty('project.name').join(', ');
  }).property('conflict.allocations.[]'),

  style: (function() {
    let dateOffset = this.get('startOffset');
    let parentOffset = this.get('parentOffset');
    if (parentOffset > 0) { dateOffset -= parentOffset; }
    let width = this.get("duration") * WIDTH_OF_DAY;
    let offset = dateOffset * WIDTH_OF_DAY;
    return `width: ${width}px; left: ${offset}px;`;
  }).property("parentOffset", "startOffset", "duration")
});

export default ConflictController;
