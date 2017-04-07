// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import dateMunge from "t2-allocation/utils/date-munge";

let FormDateRangeMixin = Ember.Mixin.create({
  startDateDidChange: Ember.observer('startDate', function() {
    let startDate = moment(this.get('startDate'));
    let endDate = moment(this.get('endDate'));

    if (endDate && endDate.isBefore(startDate)) {
      return this.set('endDate', startDate);
    }
  }),

  endDateDidChange: Ember.observer('endDate', function() {
    let startDate = moment(this.get('startDate'));
    let endDate = moment(this.get('endDate'));

    if (startDate && startDate.isAfter(endDate)) {
      return this.set('startDate', endDate);
    }
  }),

  formStartDate: Ember.computed('startDate', function(k, v) {
    //setter
    let date;
    if (arguments.length > 1) {
      this.set('startDate', moment(v));
    }

    //getter
    if (date = this.get('startDate')) {
      return dateMunge(date);
    }
  }),

  formEndDate: Ember.computed('endDate', function(k, v) {
    //setter
    let date;
    if (arguments.length > 1) {
      this.set('endDate', moment(v));
    }

    //getter
    if (date = this.get('endDate')) {
      return dateMunge(date);
    }
  })
});

export default FormDateRangeMixin;
