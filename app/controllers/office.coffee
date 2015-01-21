`import Ember from "ember";`
`import ENV from "t2-allocation/config/environment";`

OfficeController = Ember.ObjectController.extend
  needs: ['application']

  all: (->
    @store.all('office')
  ).property()

  allActive: (->
    @store.filter('office', (office) ->
      return !office.get('deleted')
    )
  ).property()

  newProjectUrl: ENV.PROJECTS_URL + 'new'

  modelChanged: (->
    route = @get('controllers.application.currentRouteName')
    return unless route
    @transitionToRoute route, @get('model')
  ).observes('model')

  actions:
    selectDate: (newDate) ->
      route = @get('controllers.application.currentRouteName')
      @transitionToRoute route, newDate, @get('model.slug')

    resize: ->
      route = @get('controllers.application.currentRouteName')
      @transitionToRoute route, UIGlobal.projectsUI.get('date'), @get('model.slug')

`export default OfficeController;`
