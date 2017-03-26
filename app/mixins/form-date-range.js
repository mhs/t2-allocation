// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";

let FormDateRangeMixin = Ember.Mixin.create({
  startDateDidChange: (function() {
    let startDate = moment(this.get('startDate'));
    let endDate = moment(this.get('endDate'));

    if (endDate && endDate.isBefore(startDate)) {
      return this.set('endDate', startDate);
    }
  }).observes('startDate'),

  endDateDidChange: (function() {
    let startDate = moment(this.get('startDate'));
    let endDate = moment(this.get('endDate'));

    if (startDate && startDate.isAfter(endDate)) {
      return this.set('startDate', endDate);
    }
  }).observes('endDate'),

  formStartDate: (function(k, v) {
    //setter
    let date;
    if (arguments.length > 1) {
      this.set('startDate', moment(v));
    }

    //getter
    if (date = this.get('startDate')) {
      return dateMunge(date);
    }
  }).property('startDate'),

  formEndDate: (function(k, v) {
    //setter
    let date;
    if (arguments.length > 1) {
      this.set('endDate', moment(v));
    }

    //getter
    if (date = this.get('endDate')) {
      return dateMunge(date);
    }
  }).property('endDate')
});

export default FormDateRangeMixin;
