// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
moduleFor("controller:project", "Project controller", {needs: ["controller:office", "controller:projects"]});

test("addAllocation", function(assert) {
  let testModel = Ember.Object.create({
    billable: true,
    provisional: true
  });
  let ctrl = this.subject();
  ctrl.set('model', testModel);
  ctrl.set('target', {send(actionName, newAllocation) {
    assert.equal(actionName, 'createAllocation', 'it sends createAllocation');
    assert.equal(newAllocation.provisional, true);
    assert.equal(newAllocation.billable, true);
    assert.equal(newAllocation.binding, true);
    return assert.equal(newAllocation.project, testModel, "it assigns its model as the new allocation's project");
  }
  });
  return ctrl.send('addAllocation', moment('2015-1-5'));
});
