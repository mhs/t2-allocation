`import Ember from "ember";`

CalendarBarComponent = Ember.Component.extend
  tagName: 'section'
  classNames: ['calendarBar']

  isEditingDate: false
  dateBinding: "UIGlobal.projectsUI.date"
  daysInWindowBinding: "UIGlobal.projectsUI.daysInWindow"

  firstDate: (->
    moment(@get("date")).format "D MMM, YYYY"
  ).property("date")

  didInsertElement: ->
    $(window).resize ->
      Ember.run.debounce @, ->
        days = UIGlobal.projectsUI.calculateWindow()
        UIGlobal.projectsUI.set "daysInWindow", days
      , 300

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

  dateRangeDidChange: (->
    @sendAction('resize')
  ).observes('dateRange')

  actions:
    editDate: ->
      @set "isEditingDate", true

    confirmDate: (dateValue) ->
      dateValue = @get("date") unless moment(dateValue).isValid()
      @set "isEditingDate", false
      @triggerAction(actionContext: dateValue)

`export default CalendarBarComponent;`
