`import Ember from "ember";`
`import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";`

PersonAllocationView = Ember.View.extend
  attributeBindings: ['style']
  classNames: ['allocation']
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling', 'provisional']

  isExternal: Ember.computed.alias('controller.isExternal')
  isNonbilling: Ember.computed.alias('controller.isNonbilling')
  provisional: Ember.computed.alias('controller.provisional')
  startOffset: Ember.computed.alias('controller.startOffset')
  duration: Ember.computed.alias('controller.duration')
  track: Ember.computed.alias('controller.track')

  allocation: Ember.computed.alias('controller.model')
  clicks: []

  click: (evt) ->
    @clicks.push Ember.run.later @, ->
      @get('controller').send 'quickView', @get('allocation')
    , 250
    false # to keep from bubbling up

  doubleClick: (evt) ->
    @clicks.map (click) ->
      Ember.run.cancel click
    @clicks = []
    @get('controller').send 'editAllocation', @get('allocation')
    false # to keep from bubbling up

  style: (->
    startOffset = @get("startOffset")
    duration = @get("duration")
    if startOffset < 0
      duration += startOffset
      startOffset = 0
    "top: " + (@get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; "
  ).property("startOffset", "duration", "track")

`export default PersonAllocationView;`
