App.ProjectController = Ember.ObjectController.extend
  needs: ['offices']
  currentOffice: Ember.computed.alias('controllers.offices.model')

  content: null

  trackCount: 0

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
    App.group_by_sorted_name(allocations, (allocs, person) ->
      allocs.forEach (alloc) ->
        alloc.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    allocations
  ).property("selectedAllocations")

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  actions:
    addAllocation: ->
      @send 'createAllocation', { project: @get('model') }
