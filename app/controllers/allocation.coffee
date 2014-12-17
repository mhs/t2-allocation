`import Ember from "ember";`
`import dateMunge from "t2-allocation/utils/date-munge";`
AllocationController = Ember.ObjectController.extend
  needs: ['projects', 'office']

  office: Ember.computed.alias('person.office')
  currentOffice: Ember.computed.alias('controllers.office.model')

  isNonbilling: (->
    !@get('billable')
  ).property('billable')

  isPartial: (->
    @get('percentAllocated') < 100
  ).property('percentAllocated')

  isExternal: (->
    @get('office') != @get('currentOffice')
  ).property('currentOffice', 'office')

  hint: (->
    _external = if @get('isExternal') then " (#{@get('office.name')})" else ''
    "#{@get('person.name')}#{_external}"
  ).property('office', 'isExternal', 'person')

  startOffset: (->
    currentMonday = moment(UIGlobal.projectsUI.get("date"))
    startDate = moment(dateMunge(@get('startDate')))
    startDate.diff currentMonday, "days"
  ).property("UIGlobal.projectsUI.date", "startDate")

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  speculative: (->
    @get('likelihood') != '100% Booked' && @get('likelihood') != null
  ).property('likelihood')

`export default AllocationController;`
