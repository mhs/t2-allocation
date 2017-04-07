// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let PeopleController = Ember.ArrayController.extend({
  needs: ['office'],

  office: Ember.computed.alias('controllers.office.model'),

  sortedPeople: Ember.computed('office', 'model', function() {
    let people = this.get('model');
    let sortByName = {
      sortProperties: ['sortOrder', 'name'],
      content: people
    };

    return Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName);
  })
});

export default PeopleController;
