App.ProjectsIndexView = Ember.View.extend()
$(window).resize ->
  days = App.projectsUI.calculateWindow()
  App.projectsUI.set "daysInWindow", days

