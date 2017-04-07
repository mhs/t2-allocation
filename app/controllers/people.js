// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let PeopleController = Ember.ArrayController.extend({
  officeController: Ember.inject.controller('office'),
  peopleController: Ember.inject.controller('people'),
  office: Ember.computed.alias('officeController.model'),
  personSort: ['sortOrder', 'name'],
  sortedPeople: Ember.computed.sort('model', 'personSort')
});

export default PeopleController;
