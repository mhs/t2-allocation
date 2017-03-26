import Ember from "ember";
import { group_by_sorted_name } from "t2-allocation/utils/group-by";

let AvailableProjectController  = Ember.ObjectController.extend({
  needs: ['application', 'projects', 'office'],

  startDate: Ember.computed.alias('UIGlobal.projectsUI.startDate'),
  endDate: Ember.computed.alias('UIGlobal.projectsUI.endDate'),
  selectedOffice: Ember.computed.alias('controllers.office.model'),
  people: Ember.computed.alias('selectedOffice.people'),

  trackCount: 0,

  currentAvailabilities: (function() {
    let availabilities = this.get("availabilities");

    let trackNo = 0;
    group_by_sorted_name(availabilities, function(avs, person) {
      avs.forEach(av => av.set("track", trackNo));
      return trackNo++;
    });
    this.set("trackCount", trackNo);
    return availabilities;
  }).property('availabilities.[]'),

  availabilities: (function() {
    let people = this.get('people');
    return this.get('allAvailabilities').filter(availability => people.contains(availability.get('person')));}).property('people', 'allAvailabilities.[]'),

  allAvailabilities: Ember.computed('model.bundle.availabilities.@each.id', function() {
    return this.get('bundle.availabilities');
  }),

  actions: {
    addAllocation() {
      return this.send('createAllocation', {});
    }
  }});

export default AvailableProjectController;
