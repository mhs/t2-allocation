module("/project_test", {
  setup: function() {
    Ember.run(
      App,
      App.advanceReadiness
    );
  },
  teardown: function() {
    App.reset();
  }
});

test("/projects existence", function() {
  expect(4);

  App.currentDate.set('date', "6/1/13");
  visit("/projects").then(function() {
    ok(exists('#projectList'), "Project list was rendered.");
    ok(exists('.project'), "Project was rendered.");
    equal(find(".calendar ul li").first().text(), "May 27", "The Date was rendered");
    equal(find('.project .descriptor span').first().text(), "Nexia Home", "The Project name was rendered");
  });
});

test("test updating date field at /projects", function() {
  expect(5);

  App.currentDate.set('date', "6/1/13");
  visit("/projects").then(function() {
    return click(".selector span");
  }).then(function() {
    // the 'body' context is needed since datepicker is built outside testing div
    ok(exists('#ui-datepicker-div', 'body'),"Calendar was rendered.");
    equal(find(".selector input").val(), "06/01/2013", "The initial Date was there" );
    fillIn(".selector input", "07/01/13\n");
  }).then( function() {
    equal(find(".calendar ul li").first().text(), "Jul 1", "The Date was rendered");
    return click(".selector span");
  }).then(function() {
    fillIn(".selector input", "07/14/13\t");
  }).then( function() {
    equal(find(".calendar ul li").first().text(), "Jul 15", "The Date was rendered");
    click(".selector span");
  }).then( function() {
    click('#ui-datepicker-div tr:nth-child(2) td:nth-child(1)', 'body');
  }).then( function() {
    equal(find(".calendar ul li").first().text(), "Jul 8", "The Date was rendered");
  });
});

test("test modal interface at /projects", function() {
  expect(1);

  visit("/projects").then(function() {
    return click(".project:first .descriptor button:first");
  }).then(function() {
    ok(exists('.modal'),"Modal was rendered.");
  });
});

// model interation tests - actaul test data loaded into test database
// interface testing - fixtures