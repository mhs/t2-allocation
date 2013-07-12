module "Integration Tests: projects",
  setup: ->
    Ember.run App, App.advanceReadiness, App.setup
  teardown: ->
    App.reset()

test "/projects existence", ->
  expect 5
  App.projectsUI.set "date", "6/1/13"
  visit("/projects").then ->
    ok exists("#projectList"), "Project list was rendered."
    ok exists(".project"), "Project was rendered."
    equal find(".calendar ul li").first().text(), "May 27", "The Date was rendered"
    equal find(".project .descriptor span").first().text(), "Nexia Home", "The Project name was rendered"
    ok $(".allocationContent").length is 4, "Allocations are present"
    

test "test updating date field at /projects", ->
  expect 5
  App.projectsUI.set "date", "6/1/13"
  
  # the 'body' context is needed since datepicker is built outside testing div
  visit("/projects").then(->
    click ".selector span"
  ).then(->
    ok exists("#ui-datepicker-div", "body"), "Calendar was rendered."
    equal find(".selector input").val(), "06/01/2013", "The initial Date was there"
    fillIn ".selector input", "07/01/13\n"
  ).then(->
    equal find(".calendar ul li").first().text(), "Jul 1", "The Date was rendered"
    click ".selector span"
  ).then(->
    fillIn ".selector input", "07/14/13\t"
  ).then(->
    equal find(".calendar ul li").first().text(), "Jul 15", "The Date was rendered"
    click ".selector span"
  ).then(->
    click "#ui-datepicker-div tr:nth-child(2) td:nth-child(1)", "body"
  ).then ->
    equal find(".calendar ul li").first().text(), "Jul 8", "The Date was rendered"


test "test modal interface at /projects", ->
  expect 1
  visit("/projects").then(->
    click ".project:first .descriptor button:first"
  ).then ->
    ok exists(".modal"), "Modal was rendered."


test "create an allocation via a  modal", ->
  expect 4
  visit("/projects").then(->
    ok exists("[data-project-id='1']"), "Project was rendered."
    ok $("[data-project-id='1'] .allocationContent").length is 0, "Allocation not present to begin"
    click ".new-allocation-button"
  ).then(->
    ok exists(".modal"), "Modal was rendered."
    fillIn ".modal-body .start-date", "2013-07-14"
    fillIn ".modal-body .end-date", "2013-08-14"
    click ".modal button[type='submit']"
  ).then ->
    ok find("[data-project-id='1'] .allocationContent:first").text().indexOf("Dave") isnt -1, "Allocation was created"