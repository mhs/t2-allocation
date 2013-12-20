App.DateUI = Ember.Object.extend
  date: null
  startDate: (->
    new Date @date
  ).property("date")
  endDate: (->
    end = moment(@get('date')).add "days", @get('daysInWindow')
    new Date end
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
  date: moment().startOf("week").add('d', 1).format("L")
