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

App.Client.FIXTURES = [
  {
    id: 1,
    name: "Indersoll Rand",
    projects: [1]
  }, {
    id: 2,
    name: "Neo",
    projects: [2]
  }
];

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
    speculative: false,
    client: 1,
    office: 2,
    slots: [],
    allocations: []
  }, {
    id: 2,
    name: "T3",
    billable: false,
    speculative: false,
    client: 2,
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
    size: 2,
    speculative: false,
    project: 2,
    allocations: []
  }, {
    id: 2,
    startDate: "2013-07-01",
    endDate: "2013-08-03",
    size: 3,
    speculative: true,
    project: 2,
    allocations: [1,2,3,4]
  }
];

App.Role.FIXTURES = [
  {
    id: 1,
    name: "Developer",
    people: [1,2],
    allocations: [1,4]
  }, {
    id: 2,
    name: "Designer",
    people: [3],
    allocations: [3]
  }, {
    id: 3,
    name: "Client Principal",
    people: [4],
    allocations: [2]
  }
];

App.Person.FIXTURES = [
  {
    id: 1,
    name: "Dave Anderson",
    role: 1,
    office: 1,
    allocations: [1]
  }, {
    id: 2,
    name: "Dan Williams",
    role: 1,
    office: 1,
    allocations: []
  }, {
    id: 3,
    name: "Lauren Woodrich",
    role: 2,
    office: 1,
    allocations: [3]
  }, {
    id: 4,
    name: "Mike Doel",
    role: 3,
    office: 2,
    allocations: [2]
  }
];

App.Allocation.FIXTURES = [
  {
    id: 1,
    startDate: "2013-06-01",
    endDate: "2013-08-05",
    percentage: 100,
    billable: true,
    speculative: false,
    slot: 1,
    person: 1,
    office: 1,
    project: 2
  }, {
    id: 2,
    startDate: "2013-06-01",
    endDate: "2013-08-05",
    percentage: 50,
    billable: true,
    speculative: false,
    slot: 2,
    person: 4,
    role: 3,
    office: 2,
    project: 2
  }, {
    id: 3,
    startDate: "2013-07-01",
    endDate: "2013-08-03",
    percentage: 50,
    billable: true,
    speculative: true,
    slot: 2,
    person: 3,
    role: 2,
    office: 1,
    project: 2
  }, {
    id: 4,
    startDate: "2013-07-01",
    endDate: "2013-08-03",
    percentage: 0,
    billable: true,
    speculative: true,
    slot: 2,
    role: 1,
    project: 2
  }
];