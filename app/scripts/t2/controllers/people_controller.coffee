App.PeopleController = App.ChartController.extend
  sortedPeople: (->
    people = @get('people')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: people

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('people')

  modelChanged: (->
    @send 'selectOffice', @get('model'), 'people'
  ).observes('model')

  actions:
    switchToProjects: ->
      @transitionToRoute 'projects', @get('model')
