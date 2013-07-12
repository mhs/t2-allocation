var exists, modelClasses;

exists = function(selector, context) {
  return !!find(selector, context).length;
};

document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

document.write("<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>");

App.rootElement = "#ember-testing";

modelClasses = [App.Allocation, App.Office, App.Person, App.Project, App.Slot];

modelClasses.forEach(function(klass) {
  return klass.adapter = Ember.FixtureAdapter.create();
});

App.setupForTesting();

App.injectTestHelpers();

App.Office.FIXTURES = [
  {
    id: 1,
    name: "Cincinnati",
    projects: [2],
    people: [1, 2, 3]
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
    vacation: false,
    offices: [2],
    slots: [],
    allocations: []
  }, {
    id: 2,
    name: "T3",
    billable: false,
    vacation: false,
    offices: [1],
    slots: [1, 2],
    allocations: [1, 2, 3, 4]
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
    allocations: [1, 2, 3, 4]
  }
];

App.Person.FIXTURES = [
  {
    id: 1,
    name: "Dave Anderson",
    unsellable: false,
    startDate: new Date("2012-02-02"),
    office: 1,
    allocations: [1]
  }, {
    id: 2,
    name: "Dan Williams",
    unsellable: false,
    startDate: new Date("2013-03-11"),
    office: 1,
    allocations: []
  }, {
    id: 3,
    name: "Lauren Woodrich",
    unsellable: false,
    startDate: new Date("2013-04-09"),
    office: 1,
    allocations: [3]
  }, {
    id: 4,
    name: "Mike Doel",
    unsellable: false,
    startDate: new Date("2009-01-19"),
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
