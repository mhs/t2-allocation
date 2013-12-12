App.DummyProjectController  = Ember.ObjectController.extend
  needs: ['application', 'projects']
  trackCount: 1

  projectHeight: (->
    "height: " + (@get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

