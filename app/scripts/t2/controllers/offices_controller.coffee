App.OfficesController = Ember.ObjectController.extend
  needs: ['application']

  all: Ember.computed.alias('controllers.application.model.firstObject')
