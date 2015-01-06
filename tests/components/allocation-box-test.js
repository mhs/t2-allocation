import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

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
});

test("clicking twice within 250ms sends the 'doubleClicked' action", function() {
});
