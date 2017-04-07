import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";
import { WIDTH_OF_DAY } from "t2-allocation/utils/constants";

let ConflictController = Ember.Component.extend({
  attributeBindings: ['style', 'title'],
  classNames: ['conflict'],

  parentOffset: null,
  conflict: null,

  startOffset: Ember.computed('UIGlobal.projectsUI.date', 'conflict.startDate', function() {
    let currentMonday = moment(UIGlobal.projectsUI.get("date"));
    let startDate = moment(dateMunge(this.get('conflict.startDate')));
    return startDate.diff(currentMonday, "days");
  }),

  duration: Ember.computed('conflict.startDate', 'conflict.endDate', function() {
    let start = moment(this.get("conflict.startDate"));
    let end = moment(this.get("conflict.endDate"));
    return end.diff(start, "days") + 1;
  }),

  hint: Ember.computed('conflict.allocations.[]', function() {
    return this.get('conflict.allocations').mapProperty('project.name').join(', ');
  }),

  style: Ember.computed("parentOffset", "startOffset", "duration", function() {
    let dateOffset = this.get('startOffset');
    let parentOffset = this.get('parentOffset');
    if (parentOffset > 0) { dateOffset -= parentOffset; }
    let width = this.get("duration") * WIDTH_OF_DAY;
    let offset = dateOffset * WIDTH_OF_DAY;
    return Ember.String.htmlSafe(`width: ${width}px; left: ${offset}px;`);
  })
});

export default ConflictController;
