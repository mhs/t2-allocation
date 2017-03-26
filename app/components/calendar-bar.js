// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let CalendarBarComponent = Ember.Component.extend({
  tagName: 'section',
  classNames: ['calendarBar'],

  isEditingDate: false,
  dateBinding: "UIGlobal.projectsUI.date",
  daysInWindowBinding: "UIGlobal.projectsUI.daysInWindow",

  firstDate: (function() {
    return moment(this.get("date")).format("D MMM, YYYY");
  }).property("date"),

  didInsertElement() {
    return $(window).resize(function() {
      return Ember.run.debounce(this, function() {
        let days = UIGlobal.projectsUI.calculateWindow();
        return UIGlobal.projectsUI.set("daysInWindow", days);
      }
      , 300);
    });
  },

  dateRange: (function() {
    let date = moment(this.get("date"));
    let daysInWindow = this.get("daysInWindow");
    if (!date.isValid()) { date = moment(); }
    let dateArray = [];
    let monday = moment(date);
    let i = 0;

    while (i <= (daysInWindow / 7)) {
      dateArray.push(moment(monday).add("week", i).format("MMM D"));
      i++;
    }
    return dateArray;
  }).property("date", "daysInWindow"),

  dateRangeDidChange: (function() {
    return this.sendAction('resize');
  }).observes('dateRange'),

  actions: {
    editDate() {
      return this.set("isEditingDate", true);
    },

    confirmDate(dateValue) {
      if (!moment(dateValue).isValid()) { dateValue = this.get("date"); }
      this.set("isEditingDate", false);
      return this.triggerAction({actionContext: dateValue});
    }
  }
});

export default CalendarBarComponent;
