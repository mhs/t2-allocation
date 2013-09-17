App.ProjectsIndexController = Ember.ArrayController.extend
  isEditing: false
  dateBinding: "App.projectsUI.date"
  daysInWindowBinding: "App.projectsUI.daysInWindow"

  actions:
    createAllocation: ->
      __hackEmberModel()
      allocation = App.Allocation.create
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))
      @send 'editAllocation', allocation

    createProject: ->
      project = App.Project.create()
      @send "editProject", project

    editDate: ->
      @set "isEditing", true

    confirmDate: (dateValue) ->
      date = undefined
      dateValue = App.projectsUI.get("date")  unless moment(dateValue).isValid()
      shortDate = moment(dateValue).format("L")
      @set "isEditing", false
      App.projectsUI.set "date", shortDate

  dateRange: (->
    date = moment(@get("date"))
    daysInWindow = @get("daysInWindow")
    date = moment()  unless date.isValid()
    dateArray = []
    monday = moment(date).startOf("week").add("days", 1)
    i = 0

    while i <= (daysInWindow / 7)
      dateArray.push moment(monday).add("week", i).format("MMM D")
      i++
    dateArray
  ).property("date", "daysInWindow")

  firstDate: (->
    moment(App.projectsUI.get("date")).format "MMMM D, YYYY"
  ).property("date")

