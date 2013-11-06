App.DateUI = Ember.Object.extend
  date: null
  daysInWindow: 1
  startDate: (->
    new Date @date
  ).property("date")
  endDate: (->
    end = moment(@date).add "days", @daysInWindow
    new Date end
  ).property("date","daysInWindow")
  calculateWindow: (->
    Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
  )


App.projectsUI = App.DateUI.create
  # initialize on the Monday of the current week
  date: moment().startOf("week").add('d', 1).format("L")

App.projectsUI.set("daysInWindow", App.projectsUI.calculateWindow())
# TODO: add tests for window resize, and date change
