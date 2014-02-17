App.OfficeController = Ember.ObjectController.extend
  needs: ['application']

  all: (->
    @store.all('office')
  ).property()


  showPeopleToggle: (->
    @get('controllers.application.currentRouteName') == 'projects'
  ).property('controllers.application.currentRouteName')

  showProjectsToggle: (->
    @get('controllers.application.currentRouteName') == 'people'
  ).property('controllers.application.currentRouteName')

  modelChanged: (->
    route = @get('controllers.application.currentRouteName')
    return unless route
    @transitionToRoute route, @get('model')
  ).observes('model')

  actions:
    switchToPeople: ->
      @transitionToRoute 'people', App.projectsUI.get('date'), @get('model.slug')

    switchToProjects: ->
      @transitionToRoute 'projects', App.projectsUI.get('date'), @get('model.slug')

    selectDate: (newDate) ->
      route = @get('controllers.application.currentRouteName')
      @transitionToRoute route, newDate, @get('model.slug')

    resize: ->
      route = @get('controllers.application.currentRouteName')
      @transitionToRoute route, App.projectsUI.get('date'), @get('model.slug')
