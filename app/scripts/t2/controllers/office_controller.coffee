App.OfficeController = Ember.ObjectController.extend
  needs: ['application']

  all: Ember.computed.alias('controllers.application.model.firstObject')


  showPeopleToggle: (->
    @get('controllers.application.currentRouteName') == 'projects'
  ).property('controllers.application.currentRouteName')

  showProjectsToggle: (->
    @get('controllers.application.currentRouteName') == 'people'
  ).property('controllers.application.currentRouteName')

  modelChanged: (->
    route = @get('controllers.application.currentRouteName')
    @transitionToRoute route, @get('model')
  ).observes('model')

  actions:
    switchToPeople: ->
      @transitionToRoute 'people', @get('model')

    switchToProjects: ->
      @transitionToRoute 'projects', @get('model')
