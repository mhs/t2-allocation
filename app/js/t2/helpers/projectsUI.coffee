App.DateUI = Ember.Object.extend
  date: null
  daysInWindow: null
  startDate: (->
    new Date @date
  ).property("date")
  endDate: (->
    end = moment(@date).add "days", @daysInWindow
    new Date end
  ).property("date","daysInWindow")


App.projectsUI = App.DateUI.create
  date: moment().format("L")
  daysInWindow: Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
# TODO: add tests for window resize, and date change