`import Ember from "ember";`
`import dateMunge from "t2-allocation/utils/date-munge";`
`import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";`

AllocationBox = Ember.Component.extend
  attributeBindings: ['style']
  classNames: ['allocation']
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling', 'provisional']

  clicks: []

  click: (evt) ->
    @clicks.push Ember.run.later @, ->
      @sendAction 'clicked', @get('allocation')
    , 250
    false # to keep from bubbling up

  doubleClick: (evt) ->
    @clicks.map (click) ->
      Ember.run.cancel click
    @clicks = []
    @sendAction 'doubleClicked', @get('allocation')
    false # to keep from bubbling up

  style: (->
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset
      startOffset = 0
    "top: " + (@get("allocation.track") * ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * WIDTH_OF_DAY) + "px; " + "width: " + (duration * WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "allocation.track")

  startOffset: (->
    startDate = moment(dateMunge(@get('startDate')))
    startDate.diff @get('currentMonday'), "days"
  ).property("currentMonday", "startDate")

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  #external properties
  currentOffice: null
  allocation: null
  currentMonday: null

  #calculated properties
  person: Ember.computed.alias('allocation.person')
  billable: Ember.computed.alias('allocation.billable')
  office: Ember.computed.alias('allocation.person.office')
  percentAllocated: Ember.computed.alias('allocation.percentAllocated')
  startDate: Ember.computed.alias('allocation.startDate')
  endDate: Ember.computed.alias('allocation.endDate')
  provisional: Ember.computed.alias('allocation.provisional')

  isNonBilling: Ember.computed.not('billable')

  isPartial: Ember.computed.lt('percentAllocated', 100)

  isExternal: (->
    @get('office') != @get('currentOffice')
  ).property('currentOffice', 'office')

  hint: (->
    _external = if @get('isExternal') then " (#{@get('office.name')})" else ''
    "#{@get('person.name')}#{_external}"
  ).property('office', 'isExternal', 'person')

`export default AllocationBox;`
