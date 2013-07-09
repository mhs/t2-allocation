//= require application
//= require_tree .
//= require_self

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>');

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

function exists(selector, context) {
  return !!find(selector, context).length;
}

// Replace our REST-based store with a fixture-based store for testing, so we
// don't need a server.  We disable simulateRemoteResponse so that objects will
// appear to load at the end of every Ember.run block instead of waiting for a
// timer to fire.
App.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create({ simulateRemoteResponse: false })
});

App.Office.FIXTURES = [
  {
    id: 1,
    name: "Cincinnati",
    projects: [2],
    people: [1,2,3]
  }, {
    id: 2,
    name: "Columbus",
    projects: [1],
    people: [4]
  }, {
    id: 3,
    name: "Monetvideo"
  }
];

App.Project.FIXTURES = [
  {
    id: 1,
    name: "Nexia Home",
    billable: true,
    binding: false,
    office: 2,
    slots: [],
    allocations: []
  }, {
    id: 2,
    name: "T3",
    billable: false,
    binding: false,
    office: 1,
    slots: [1,2],
    allocations: [1,2,3,4]
  }
];

App.Slot.FIXTURES = [
  {
    id: 1,
    startDate: "2013-06-01",
    endDate: "2013-08-05",
    project: 2,
    allocations: []
  }, {
    id: 2,
    startDate: "2013-07-01",
    endDate: "2013-08-03",
    project: 2,
    allocations: [1,2,3,4]
  }
];

App.Person.FIXTURES = [
  {
    id: 1,
    name: "Dave Anderson",
    office: 1,
    allocations: [1]
  }, {
    id: 2,
    name: "Dan Williams",
    office: 1,
    allocations: []
  }, {
    id: 3,
    name: "Lauren Woodrich",
    office: 1,
    allocations: [3]
  }, {
    id: 4,
    name: "Mike Doel",
    office: 2,
    allocations: [2]
  }
];

App.Allocation.FIXTURES = [
  {
    id: 1,
    startDate: new Date("2013-06-02"),
    endDate: new Date("2013-08-05"),
    billable: true,
    binding: false,
    slot: 1,
    person: 1,
    project: 2
  }, {
    id: 2,
    startDate: new Date("2013-06-01"),
    endDate: new Date("2013-08-05"),
    billable: true,
    binding: false,
    slot: 2,
    person: 4,
    project: 2
  }, {
    id: 3,
    startDate: new Date("2013-07-01"),
    endDate: new Date("2013-08-03"),
    billable: true,
    binding: true,
    slot: 2,
    person: 3,
    project: 2
  }, {
    id: 4,
    startDate: "2013-07-01",
    endDate: "2013-08-03",
    billable: true,
    binding: true,
    project: 2
  }
];
