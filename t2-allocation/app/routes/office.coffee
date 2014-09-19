`import Ember from "ember";`

OfficeRoute = Ember.Route.extend
  model: (params) ->
    offices = @store.all('allocationBundle').get('firstObject.offices')
    offices.findProperty 'slug', params.slug

  serialize: (model) ->
    {slug: model.get('slug')}

  actions:
    createProject: ->
      @send 'editProject', @store.createRecord('project')

    editProject: (project) ->
      @controllerFor("projects.modal").set "availableOffices", @controllerFor('office').get('all')
      @controllerFor("projects.modal").edit project
      @send "openModal", "projects.modal"

`export default OfficeRoute;`
