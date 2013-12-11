App.ChartController = Ember.ObjectController.extend
  needs: ['application']

  isEditingDate: false
  dateBinding: "App.projectsUI.date"
  daysInWindowBinding: "App.projectsUI.daysInWindow"

  offices: Ember.computed.alias('controllers.application.offices')

  firstDate: (->
    moment(@get("date")).format "MMMM D, YYYY"
  ).property("date")

  dateRange: (->
    date = moment(@get("date"))
    daysInWindow = @get("daysInWindow")
    date = moment()  unless date.isValid()
    dateArray = []
    monday = moment(date)
    i = 0

    while i <= (daysInWindow / 7)
      dateArray.push moment(monday).add("week", i).format("MMM D")
      i++
    dateArray
  ).property("date", "daysInWindow")

  actions:
    editDate: ->
      @set "isEditingDate", true

    confirmDate: (dateValue) ->
      dateValue = @get("date") unless moment(dateValue).isValid()
      @set "isEditingDate", false
      @set "date", moment(dateValue).format("L")
