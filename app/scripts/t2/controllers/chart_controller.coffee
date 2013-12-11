App.ChartController = Ember.ObjectController.extend
  needs: ['application']

  isEditingDate: false
  dateBinding: "App.projectsUI.date"
  daysInWindowBinding: "App.projectsUI.daysInWindow"

  offices: Ember.computed.alias('controllers.application.offices')

