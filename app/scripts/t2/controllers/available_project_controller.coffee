App.AvailableProjectController  = Ember.ObjectController.extend
  needs: ['application']
  trackCount: 0

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

  currentAvailabilities: (->
    availabilities = @get("availabilities")
    trackNo = 0
    # TODO: this puts each availability on its own line. It is wrong.
    availabilities.forEach (availability) ->
      availability.set "track", trackNo++
    @set "trackCount", trackNo
    availabilities
  ).property('availabilities.isLoaded')
