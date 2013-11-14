App.DummyProjectController  = Ember.ObjectController.extend
  needs: ['application', 'officesProjects']
  trackCount: 1

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

