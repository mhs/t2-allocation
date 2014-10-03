`import Ember from "ember";`
`import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";`

AvailabilityView = Ember.View.extend
  attributeBindings: ['style']
  classNames: ['allocation', 'available']
  classNameBindings: ['isExternal:external']

  isExternal: Ember.computed.alias('controller.isExternal')
  allocation: Ember.computed.alias('controller.model')
  startOffset: Ember.computed.alias('controller.startOffset')
  duration: Ember.computed.alias('controller.duration')
  track: Ember.computed.alias('controller.track')

  doubleClick: (evt) ->
    allocationInfo =
      startDate: @get('allocation.startDate')
      endDate: @get('allocation.endDate')
      person: @get('allocation.person')
    @get('controller').send 'createAllocation', allocationInfo
    false # to keep from bubbling up

  # to offset zero, an 'extra' day will be removed
  style: (->
    scale = 16
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset
      startOffset = 0
    "top: " + (@get("track") * ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * WIDTH_OF_DAY) + "px; " + "width: " + (duration * WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "track")

`export default AvailabilityView;`
