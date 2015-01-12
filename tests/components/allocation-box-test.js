import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../helpers/start-app';
import { ALLOCATION_HEIGHT, WIDTH_OF_DAY } from "t2-allocation/utils/constants";

moduleForComponent('allocation-box', 'Allocation Component Test', {
                     needs: ['helper:short-date']
                   });

test('it works', function() {
  var component = this.subject();

  component.set('allocation', {percentAllocated: 105});

  equal(component.get('isPartial'), false, 'It should not be partial');

  component.set('allocation', {percentAllocated: 90});
  equal(component.get('isPartial'), true, 'It should be partial');
});

test("startOffset returns the difference in days between the allocation's start date and the currentMonday", function() {
  var component = this.subject();

  component.set('allocation', {startDate: '2015-01-12'});
  component.set('currentMonday', moment('2015-01-5'));
  equal(component.get('startOffset'), 7);

  component.set('currentMonday', moment('2015-01-14'));
  equal(component.get('startOffset'), -2, 'startOffset can be negative');
});

test('boxWidth is in pixels', function() {
  var component = this.subject();
  component.set('startOffset', 0);
  component.set('duration', 10);
  equal(component.get('boxWidth'), 10 * WIDTH_OF_DAY);

  component.set('startOffset', -5);
  equal(component.get('boxWidth'), 5 * WIDTH_OF_DAY, 'it accounts for negative offset');

  component.set('startOffset', 5);
  equal(component.get('boxWidth'), 10 * WIDTH_OF_DAY, 'positive offsets dont affect the width');
});

test('topOffset is in pixels', function() {
  var component = this.subject();
  component.set('allocation', {track: 0});
  equal(component.get('topOffset'), 0 * ALLOCATION_HEIGHT);

  component.set('allocation', {track: 5});
  equal(component.get('topOffset'), 5 * ALLOCATION_HEIGHT);
});

test('leftOffset is in pixels', function() {
  var component = this.subject();
  component.set('startOffset', 5);
  equal(component.get('leftOffset'), 5 * WIDTH_OF_DAY);

  component.set('startOffset', -5);
  equal(component.get('leftOffset'), 0, 'leftOffset is 0 if startOffset is negative');
});

var testProperties = function() {
  var office = {name: "Test Office"};
  var person = {name: "Steve", office: office};
  var allocation = {
    person: person,
    billable: true,
    office: office,
    percentAllocated: 100,
    startDate: moment('2015-1-1'),
    endDate: moment('2015-1-8'),
    provisional: true
  };

  return {allocation: allocation,
    currentMonday: moment('2015-1-1'),
    currentOffice: office};

};

test('it renders', function() {
  var component = this.subject();

  Ember.run(function(){
    component.setProperties(testProperties());
  });

  ok(this.$().hasClass('provisional'), 'it is provisional');
});

test("clicking once sends the 'clicked' action", function() {
  expect(1);
  var App = startApp();
  var actionTarget = {
    externalAction: function(){
      ok(true);
    }
  };

  var component = this.subject();

  component.setProperties(testProperties());
  component.set('clicked', 'externalAction');
  component.set('targetObject', actionTarget);

  this.append();
  click('.allocation-content');
});

test("double clicking sends the 'doubleClicked' action and DOESNT send click", function() {
  expect(1);
  var App = startApp();
  var actionTarget = {
    clickAction: function(){
      ok(false);
    },
    doubleClickAction: function(){
      ok(true);
    }
  };

  var component = this.subject();

  component.setProperties(testProperties());
  component.set('doubleClicked', 'doubleClickAction');
  component.set('clicked', 'clickAction');
  component.set('targetObject', actionTarget);

  this.append();
  triggerEvent('.allocation-content', 'dblclick');
});
