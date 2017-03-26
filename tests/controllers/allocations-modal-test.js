// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
import { checkDate } from "../helpers/assertions";

moduleFor("controller:allocations/modal", "Allocations modal controller", {needs: ["controller:office", "controller:projects"]});

test("calling edit properly initializes the modal", function() {
  expect(4);
  let ctrl = this.subject();

  let props = Ember.Object.create({isNew: true, billable: true, binding: true, provisional: false});

  ctrl.edit(props);
  ok(!ctrl.get('canDelete'));
  equal(ctrl.get('billable'), true, "proxies billable to the controller");
  equal(ctrl.get('binding'), true, "proxies binding to the controller");
  return equal(ctrl.get('_editedModel'), props, "sets the edited model");
});

test("changing the start date adjusts the end date", function() {
  let ctrl = this.subject();

  let props = Ember.Object.create({isNew: true, startDate: moment('2015-1-1'), endDate: moment('2015-1-5')});
  ctrl.edit(props);
  ctrl.set('startDate', moment('2015-1-6'));
  return checkDate(ctrl.get('endDate'), ctrl.get('startDate'), "end date is adjusted to be the same as start date");
});

test("changing the end date adjusts the start date", function() {
  let ctrl = this.subject();

  let props = Ember.Object.create({isNew: true, startDate: moment('2015-1-1'), endDate: moment('2015-1-5')});
  ctrl.edit(props);
  ctrl.set('endDate', moment('2014-1-6'));
  return checkDate(ctrl.get('startDate'), ctrl.get('endDate'), "start date is adjusted to be the same as end date");
});
