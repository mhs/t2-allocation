`import Ember from "ember";`
`import ALLOCATION_HEIGHT from "t2-allocation/utils/constants";`
`import group_by_sorted_name from "t2-allocation/utils/group-by";`

ProjectController = Ember.ObjectController.extend
  needs: ['office']
  currentOffice: Ember.computed.alias('controllers.office.model')

  content: null

  trackCount: 0

  allocations: Ember.computed.alias('model.allocations')

  selectedAllocations: (->
    allocations = @get('allocations')
    if @get('vacation')
      allocations.filterBy('person.office.id', @get('currentOffice.id'))
    else
      allocations
  ).property("currentOffice", "allocations.[]", "allocations.@each.current")

  currentAllocations: (->
    allocations = @get("selectedAllocations").filterProperty("current")

    trackNo = 0
    group_by_sorted_name(allocations, (allocs, person) ->
      allocs.forEach (alloc) ->
        alloc.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    allocations
  ).property("selectedAllocations")

  projectHeight: (->
    "height: " + (@get("trackCount") * ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  actions:
    addAllocation: (startDate) ->
      startDate ||= moment()
      @send 'createAllocation', {project: @get('model') , startDate: startDate}

`export default ProjectController;`
