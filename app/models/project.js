import Ember from 'ember';
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";
import ENV from "t2-allocation/config/environment";

let Project = DS.Model.extend({
  name: DS.attr('string'),
  vacation: DS.attr('boolean'),
  billable: DS.attr('boolean', {defaultValue: true}),

  offices: DS.hasMany('office', {
    async: false
  }),
  allocations: DS.hasMany('allocation', { async: true }),

  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  bundle: null,


  //flat-maps the offices' active people
  _activePeople: Ember.computed('offices.@each.activePeople', function() {
    return [].concat.apply([], this.get('offices').mapBy('activePeople'));
  }), 

  peopleSort: ['name:asc'],
  activePeople: Ember.computed.sort('_activePeople', 'peopleSort'),

  sortOrder: Ember.computed('billable', 'vacation', function() {
    let val = 0;
    if (!this.get('billable')) {
      val += 1;
    }
    if (this.get('vacation')) {
      val += 2;
    }
    return val;
  }),

  showUrl:Ember.computed(function() {
    return ENV.PROJECTS_URL + this.get('id');
  })
});


export default Project;
