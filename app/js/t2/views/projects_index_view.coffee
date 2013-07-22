App.ProjectsIndexView = Ember.View.extend()
$(window).resize ->
  days = Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
  App.projectsUI.set "daysInWindow", days

