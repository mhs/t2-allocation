`import Ember from "ember";`
`import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";`
`import clickedDate from "t2-allocation/utils/clicked-date";`

ProjectAllocationsView = Ember.View.extend
  trackCount: Ember.computed.alias('controller.trackCount')

  projectHeight: (->
    "height: " + (@get("trackCount") * ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  doubleClick: (evt) ->
    newStartDate = clickedDate(evt.clientX)
    @get('controller').send 'addAllocation', newStartDate

`export default ProjectAllocationsView;`
