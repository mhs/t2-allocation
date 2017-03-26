`import Ember from "ember";`
ProjectsRoute = Ember.Route.extend
  model: ->
    office = @modelFor('office')
    projects = office.get('projects')
    bundle = @modelFor('bundle').get('firstObject')
    unless projects.findBy('dummyProject', true)
      dummyProject = @store.createRecord('project', dummyProject: true, sortOrder: -1)
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = @store.createRecord('project',
        people: office.get('people')
        office: office
        name: "Available"
        availableProject: true
        sortOrder: 4
        bundle: bundle
      )
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)

`export default ProjectsRoute;`
