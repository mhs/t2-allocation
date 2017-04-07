// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../helpers/start-app';
import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";
moduleForComponent("allocation-box", "Allocation Component Test",
  {needs: ["helper:short-date"]});

test("it works", function(assert) {
  let component = this.subject();
  component.set("allocation",
    {percentAllocated: 105});

  assert.equal(component.get("isPartial"), false, "It should not be partial");
  component.set("allocation",
    {percentAllocated: 90});

  return assert.equal(component.get("isPartial"), true, "It should be partial");
});

test("startOffset returns the difference in days between the allocation's start date and the currentMonday", function(assert) {
  let component = this.subject();
  component.set("allocation",
    {startDate: "2015-01-12"});

  component.set("currentMonday", moment("2015-01-5"));
  assert.equal(component.get("startOffset"), 7);
  component.set("currentMonday", moment("2015-01-14"));
  return assert.equal(component.get("startOffset"), -2, "startOffset can be negative");
});

test("boxWidth is in pixels", function(assert) {
  let component = this.subject();
  component.set("startOffset", 0);
  component.set("duration", 10);
  assert.equal(component.get("boxWidth"), 10 * WIDTH_OF_DAY);
  component.set("startOffset", -5);
  assert.equal(component.get("boxWidth"), 5 * WIDTH_OF_DAY, "it accounts for negative offset");
  component.set("startOffset", 5);
  return assert.equal(component.get("boxWidth"), 10 * WIDTH_OF_DAY, "positive offsets dont affect the width");
});

test("topOffset is in pixels", function(assert) {
  let component = this.subject();
  component.set("index", 0);

  assert.equal(component.get("topOffset"), 0 * ALLOCATION_HEIGHT);
  component.set("index", 5);

  return assert.equal(component.get("topOffset"), 5 * ALLOCATION_HEIGHT);
});

test("leftOffset is in pixels", function(assert) {
  let component = this.subject();
  component.set("startOffset", 5);
  assert.equal(component.get("leftOffset"), 5 * WIDTH_OF_DAY);
  component.set("startOffset", -5);
  return assert.equal(component.get("leftOffset"), 0, "leftOffset is 0 if startOffset is negative");
});

let testProperties = function() {
  let office = {name: "Test Office"};
  let person = {
    name: "Steve",
    office
  };

  let allocation = {
    person,
    billable: true,
    office,
    percentAllocated: 100,
    startDate: moment("2015-1-1"),
    endDate: moment("2015-1-8"),
    speculative: true
  };

  return {
    allocation,
    currentMonday: moment("2015-1-1"),
    currentOffice: office
  };
};

test("it renders", function(assert) {
  let component = this.subject();
  Ember.run(() => component.setProperties(testProperties()));

  return assert.ok(this.$().hasClass("speculative"), "it is provisional");
});

test("clicking once sends the 'clicked' action", function(assert) {
  assert.expect(1);
  startApp();
  let actionTarget = { externalAction() {
    return assert.ok(true);
  }
};

  let component = this.subject();
  component.setProperties(testProperties());
  component.set("clicked", "externalAction");
  component.set("targetObject", actionTarget);
  this.append();
  return click(".allocation");
});

test("double clicking sends the 'doubleClicked' action and DOESNT send click", function(assert) {
  assert.expect(1);
  startApp();
  let actionTarget = {
    clickAction() {
      return assert.ok(false);
    },

    doubleClickAction() {
      return assert.ok(true);
    }
  };

  let component = this.subject();
  component.setProperties(testProperties());
  component.set("doubleClicked", "doubleClickAction");
  component.set("clicked", "clickAction");
  component.set("targetObject", actionTarget);
  this.append();
  return triggerEvent(".allocation", "dblclick");
});
