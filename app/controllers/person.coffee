`import Ember from "ember";`
`import { group_by_sorted_project } from "t2-allocation/utils/group-by";`
`import { ALLOCATION_HEIGHT } from "t2-allocation/utils/constants";`
`import AllocationTrack from "t2-allocation/models/allocation-track";`

PersonController = Ember.ObjectController.extend
  needs: ['people', 'office']
  currentOffice: Ember.computed.alias('controllers.office.model')

  trackCount: 0

  selectedAllocations: (->
    @get('allocations')
  ).property("currentOffice", "allocations.[]", "allocations.@each.current")

  currentAllocations: (->
    allocations = @get("selectedAllocations").filterProperty("current")

    trackNo = 0
    group_by_sorted_project(allocations, (allocs, person) ->
      allocs.forEach (alloc) ->
        alloc.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    allocations.map (allocation) =>
      AllocationTrack.create
        allocation: allocation
        index: allocation.get('track')
        currentOffice: @get('currentOffice')
  ).property("selectedAllocations")

  personHeight: (->
    "height: " + (@get("trackCount") * ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  actions:
    addAllocation: (startDate) ->
      startDate ||= moment()
      @send 'createAllocation', {person: @get('model') , startDate: startDate}

`export default PersonController;`
