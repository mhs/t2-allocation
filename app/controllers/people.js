// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let PeopleController = Ember.ArrayController.extend({
  needs: ['office'],

  office: Ember.computed.alias('controllers.office.model'),

  sortedPeople: (function() {
    let people = this.get('model');
    let sortByName = {
      sortProperties: ['sortOrder', 'name'],
      content: people
    };

    return Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName);
  }).property('office', 'model')
});

export default PeopleController;
