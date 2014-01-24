App.DateUI = Ember.Object.extend
  date: null
  startDate: (->
    moment(@date)
  ).property("date")

  endDate: (->
    moment(@get('date')).add "days", @get('daysInWindow')
  ).property("date","daysInWindow")

  calculateWindow: (->
    Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
  )

  allocationUpdates: 0

  init: ->
    @_super()
    @set('daysInWindow', @calculateWindow())


App.projectsUI = App.DateUI.create
  # initialize on the Monday of the current week
  date: moment().startOf("week").add('d', 1).format("YYYY-MM-DD")
