var WIDTH_OF_DAY = 16;
var WIDTH_OF_DESCRIPTOR = 192;

App.ProjectsView = Ember.View.extend({});

$(window).resize(function() {
	var days =  Math.ceil((window.innerWidth-WIDTH_OF_DESCRIPTOR)/WIDTH_OF_DAY);
    App.currentDate.set('daysInWindow', days);
});