`import Ember from "ember";`
`import ALLOCATION_HEIGHT from "t2-allocation/utils/constants";`

DummyProjectController  = Ember.ObjectController.extend
  needs: ['application', 'projects']
  trackCount: 1

  projectHeight: (->
    "height: " + (@get("trackCount") * ALLOCATION_HEIGHT + 1) + "px;"
  ).property("trackCount")

`export default DummyProjectController ;`
