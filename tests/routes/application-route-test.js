// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
import { checkDate } from '../helpers/assertions';

moduleFor("route:application", "Application Route");

test("_createAllocation creates a new record with default props and calls _editAllocation with it", function(assert) {
  assert.expect(4);
  let testAttrs =
    {billable: true};

  let route = this.subject();
  route.set('store', {createRecord(type, attrs) {
    checkDate(attrs.startDate, moment(), "The start date defaults to the current date");
    checkDate(attrs.endDate, moment().add(2, 'weeks'), "The end date defaults to 2 weeks from the current date");
    return equal(attrs.billable, true, "It merges in the defaults with the arguments");
  }
  });

  route._editAllocation = allocation => ok(true, "it calls _editAllocation");

  return route._createAllocation(testAttrs);
});
