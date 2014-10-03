`import Ember from "ember";`

OfficeController = Ember.ObjectController.extend
  needs: ['application']

  all: (->
    @store.all('office')
  ).property()

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
