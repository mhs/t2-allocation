`import Ember from "ember";`
ProjectsRoute = Ember.Route.extend
  model: ->
    office = @modelFor('office')
    projects = office.get('projects')
    unless projects.findBy('dummyProject', true)
      dummyProject = @store.createRecord('dummyProject')
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = @store.createRecord('availableProject',
        people: office.get('people')
        office: office
        name: "Available"
      )
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)

`export default ProjectsRoute;`
