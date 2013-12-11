App.OfficesController = Ember.ObjectController.extend
  needs: ['application']

  all: Ember.computed.alias('controllers.application.model.firstObject')


  showPeopleToggle: (->
    @get('controllers.application.currentRouteName') == 'projects'
  ).property('controllers.application.currentRouteName')

  showProjectsToggle: (->
    @get('controllers.application.currentRouteName') == 'people'
  ).property('controllers.application.currentRouteName')

  actions:
    switchToPeople: ->
      @transitionToRoute 'people', @get('office')

    switchToProjects: ->
      @transitionToRoute 'projects', @get('office')
