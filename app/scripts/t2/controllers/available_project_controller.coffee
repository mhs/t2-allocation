App.AvailableProjectController  = Ember.ObjectController.extend
  needs: ['application', 'officesProjects']
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

  availabilities: (->
    App.Availability.find({start_date: '2013-11-4', office_id: @get('controllers.officesProjects.id'), end_date: '2013-12-31'})
  ).property('controllers.officesProjects.id')
