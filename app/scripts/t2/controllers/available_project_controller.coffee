App.AvailableProjectController  = Ember.ObjectController.extend
  needs: ['application', 'projects']
  trackCount: 0

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  currentAvailabilities: (->
    availabilities = @get("availabilities")

    trackNo = 0
    App.group_by_sorted_name(availabilities, (avs, person) ->
      avs.forEach (av) ->
        av.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    availabilities
  ).property('availabilities.isLoaded')

  availabilityStart: (->
    moment(App.projectsUI.get('startDate')).format("YYYY-MM-DD")
  ).property('App.projectsUI.startDate')

  availabilityEnd: (->
    moment(App.projectsUI.get('endDate')).format("YYYY-MM-DD")
  ).property('App.projectsUI.endDate')

  availabilities: (->
    criteria =
      start_date: @get('availabilityStart')
      office_id: @get('controllers.projects.id')
      end_date: @get('availabilityEnd')
    App.Availability.find(criteria)
  ).property('controllers.projects.id',
    'availabilityStart',
    'availabilityEnd',
    'App.projectsUI.allocationUpdates')

  actions:
    addAllocation: ->
      @send 'createAllocation', {}

