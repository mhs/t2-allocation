import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";

let ConflictController = Ember.ObjectController.extend({

  startOffset: (function() {
    let currentMonday = moment(UIGlobal.projectsUI.get("date"));
    let startDate = moment(dateMunge(this.get('startDate')));
    return startDate.diff(currentMonday, "days");
  }).property('UIGlobal.projectsUI.date', 'startDate'),

  duration: (function() {
    let start = moment(this.get("startDate"));
    let end = moment(this.get("endDate"));
    return end.diff(start, "days") + 1;
  }).property('startDate', 'endDate'),

  hint: (function() {
    return this.get('allocations').mapProperty('project.name').join(', ');
  }).property('allocations.[]')
});

export default ConflictController;
