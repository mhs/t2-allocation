`import Ember from "ember";`
`import dateMunge from "t2-allocation/utils/date-munge";`
`import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";`

cssPx = (name, val) ->
  "#{name}: #{val}px; "

AllocationBox = Ember.Component.extend
  attributeBindings: ['style']
  classNames: ['allocation']
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling', 'speculative', 'role:role']

  #external properties
  currentOffice: null
  allocation: null
  currentMonday: null
  index: 0

  #calculated properties
  person: Ember.computed.alias('allocation.person')
  billable: Ember.computed.alias('allocation.billable')
  office: Ember.computed.alias('allocation.person.office')
  percentAllocated: Ember.computed.alias('allocation.percentAllocated')
  startDate: Ember.computed.alias('allocation.startDate')
  endDate: Ember.computed.alias('allocation.endDate')
  role: Ember.computed.alias('allocation.role')

  isNonBilling: Ember.computed.not('billable')

  isPartial: Ember.computed.lt('percentAllocated', 100)

  isExternal: (->
    @get('office') != @get('currentOffice')
  ).property('currentOffice', 'office')

  speculative: (->
    @get('allocation.likelihood') != '100% Booked' && @get('allocation.likelihood') != null
  ).property('allocation.likelihood')

  style: Ember.computed "topOffset", "leftOffset", "boxWidth", ->
    cssPx('top', @get('topOffset')) +
    cssPx('left', @get('leftOffset')) +
    cssPx('width', @get('boxWidth'))

  boxWidth: Ember.computed 'duration', 'startOffset', ->
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset # startOffset is negative
    duration * WIDTH_OF_DAY

  topOffset: Ember.computed 'index', ->
    @get('index') * ALLOCATION_HEIGHT

  leftOffset: Ember.computed 'startOffset', ->
    startOffset = @get("startOffset")
    if startOffset < 0
      0
    else
      startOffset * WIDTH_OF_DAY

  startOffset: (->
    startDate = moment(dateMunge(@get('startDate')))
    startDate.diff @get('currentMonday'), "days"
  ).property("currentMonday", "startDate")

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  clicks: []

  #event hooks
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


`export default AllocationBox;`
