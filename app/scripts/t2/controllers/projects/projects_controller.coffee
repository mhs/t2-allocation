App.ProjectsController = Ember.ArrayController.extend
  needs: ['office']

  office: Ember.computed.alias('controllers.office.model')

  people: Ember.computed.alias('office.activePeople')

  sortedProjects: (->
    projects = @get('model')
    people = @get('people')
    unless projects.findBy('dummyProject', true)
      dummyProject = @store.createRecord('dummyProject')
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = @store.createRecord('availableProject',
        people: people
        office: @get('office')
        name: "Available"
      )
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('office', 'model')
