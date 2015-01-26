`import Ember from "ember";`
`import { test, moduleFor } from "ember-qunit"`
moduleFor("controller:project", "Project controller", needs: ["controller:office", "controller:projects"])

test "addAllocation", ->
  testModel = Ember.Object.create
    billable: true
    provisional: true
  ctrl = @subject()
  ctrl.set('model', testModel)
  ctrl.set('target', {send: (actionName, newAllocation) ->
    equal(actionName, 'createAllocation', 'it sends createAllocation')
    equal(newAllocation.provisional, true)
    equal(newAllocation.billable, true)
    equal(newAllocation.binding, true)
    equal(newAllocation.project, testModel, "it assigns its model as the new allocation's project")
  })
  ctrl.send('addAllocation', moment('2015-1-5'))
