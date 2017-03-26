// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
moduleFor("controller:project", "Project controller", {needs: ["controller:office", "controller:projects"]});

test("addAllocation", function() {
  let testModel = Ember.Object.create({
    billable: true,
    provisional: true
  });
  let ctrl = this.subject();
  ctrl.set('model', testModel);
  ctrl.set('target', {send(actionName, newAllocation) {
    equal(actionName, 'createAllocation', 'it sends createAllocation');
    equal(newAllocation.provisional, true);
    equal(newAllocation.billable, true);
    equal(newAllocation.binding, true);
    return equal(newAllocation.project, testModel, "it assigns its model as the new allocation's project");
  }
  });
  return ctrl.send('addAllocation', moment('2015-1-5'));
});
