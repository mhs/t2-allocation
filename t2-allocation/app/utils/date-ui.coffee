`import Ember from "ember";`
`import { WIDTH_OF_DESCRIPTOR, WIDTH_OF_DAY } from "t2-allocation/utils/constants";`
DateUI = Ember.Object.extend
  date: null
  startDate: (->
    moment(@date)
  ).property("date")

  endDate: (->
    moment(@get('date')).add "days", @get('daysInWindow')
  ).property("date","daysInWindow")

  calculateWindow: (->
    Math.ceil((window.innerWidth - WIDTH_OF_DESCRIPTOR) / WIDTH_OF_DAY)
  )

  init: ->
    @_super()
    @set('daysInWindow', @calculateWindow())

window.UIGlobal = {}
window.UIGlobal.projectsUI = DateUI.create
  # initialize on the Monday of the current week
  date: moment().startOf("week").add('d', 1).format("YYYY-MM-DD")

`export { DateUI, projectsUI };`
