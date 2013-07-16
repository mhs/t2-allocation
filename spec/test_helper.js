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
    project_ids: [2],
    person_ids: [1, 2, 3]
  }, {
    id: 2,
    name: "Columbus",
    project_ids: [1],
    person_ids: [4]
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
    office_ids: [2],
    slot_ids: [],
    allocation_ids: []
  }, {
    id: 2,
    name: "T3",
    billable: false,
    vacation: false,
    office_ids: [1],
    slot_ids: [1, 2],
    allocation_ids: [1, 2, 3, 4]
  }
];

App.Slot.FIXTURES = [
  {
    id: 1,
    start_date: "2013-06-01",
    end_date: "2013-08-05",
    project_id: 2,
    allocation_ids: []
  }, {
    id: 2,
    start_date: "2013-07-01",
    end_date: "2013-08-03",
    project_id: 2,
    allocation_ids: [1, 2, 3, 4]
  }
];

App.Person.FIXTURES = [
  {
    id: 1,
    name: "Dave Anderson",
    unsellable: false,
    start_date: "2012-02-02",
    office_id: 1,
    allocation_ids: [1]
  }, {
    id: 2,
    name: "Dan Williams",
    unsellable: false,
    start_date: "2013-03-11",
    office_id: 1,
    allocation_ids: []
  }, {
    id: 3,
    name: "Lauren Woodrich",
    unsellable: false,
    start_date: "2013-04-09",
    office_id: 1,
    allocation_ids: [3]
  }, {
    id: 4,
    name: "Mike Doel",
    unsellable: false,
    start_date: "2009-01-19",
    office_id: 2,
    allocation_ids: [2]
  }
];

App.Allocation.FIXTURES = [
  {
    id: 1,
    start_date: "2013-06-02",
    end_date: "2013-08-05",
    billable: true,
    binding: false,
    slot_id: 1,
    person_id: 1,
    project_id: 2
  }, {
    id: 2,
    start_date: "2013-06-01",
    end_date: "2013-08-05",
    billable: true,
    binding: false,
    slot_id: 2,
    person_id: 4,
    project_id: 2
  }, {
    id: 3,
    start_date: "2013-07-01",
    end_date: "2013-08-03",
    billable: true,
    binding: true,
    slot_id: 2,
    person_id: 3,
    project_id: 2
  }, {
    id: 4,
    start_date: "2013-07-01",
    end_date: "2013-08-03",
    billable: true,
    binding: true,
    project_id: 2
  }
];
