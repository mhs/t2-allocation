WIDTH_OF_DAY = 16
WIDTH_OF_DESCRIPTOR = 192
App.ProjectsIndexView = Ember.View.extend({})
$(window).resize ->
  days = Math.ceil((window.innerWidth - WIDTH_OF_DESCRIPTOR) / WIDTH_OF_DAY)
  App.currentDate.set "daysInWindow", days

