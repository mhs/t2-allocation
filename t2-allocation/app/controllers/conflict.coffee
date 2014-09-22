`import Ember from "ember";`
`import dateMunge from "t2-allocation/utils/date-munge";`

ConflictController = Ember.ObjectController.extend

  startOffset: (->
    currentMonday = moment(UIGlobal.projectsUI.get("date"))
    startDate = moment(dateMunge(@get('startDate')))
    startDate.diff(currentMonday, "days")
  ).property('UIGlobal.projectsUI.date', 'startDate')

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property('startDate', 'endDate')

  hint: (->
    @get('allocations').mapProperty('project.name').join(', ')
  ).property('allocations.[]')

`export default ConflictController;`
