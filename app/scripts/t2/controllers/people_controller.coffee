App.PeopleController = Ember.ArrayController.extend
  needs: ['offices']

  office: Ember.computed.alias('controllers.offices.model')

  sortedPeople: (->
    people = @get('model')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: people

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('people')
