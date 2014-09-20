`import Ember from "ember";`

PeopleController = Ember.ArrayController.extend
  needs: ['office']

  office: Ember.computed.alias('controllers.office.model')

  sortedPeople: (->
    people = @get('model')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: people

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('office', 'model')

`export default PeopleController;`
