App.PersonController = Ember.ObjectController.extend
  needs: ['officesPeople']
  currentOffice: Ember.computed.alias('controllers.officesPeople.model')

  content: null

  trackCount: 0

  selectedAllocations: (->
    @get('allocations')
  ).property("currentOffice", "allocations.[]", "allocations.@each.current")

  currentAllocations: (->
    allocations = @get("selectedAllocations").filterProperty("current")

    trackNo = 0
    App.group_by_sorted_project(allocations, (allocs, person) ->
      allocs.forEach (alloc) ->
        alloc.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    allocations
  ).property("selectedAllocations")

  personHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  actions:
    addAllocation: ->
      @send 'createAllocation', { person: @get('model') }
