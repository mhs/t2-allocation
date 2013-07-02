ALLOCATION_HEIGHT = 16;
TIME_SCALE = 16;

App.AllocationController = Ember.ObjectController.extend({

	startOffset: (function () {
		var currentMonday = moment( App.currentDate.get('date') ).startOf('week');
		return moment(this.get('startDate')).diff( currentMonday, 'days');
	}).property('App.currentDate.date', 'startDate'),

	duration: (function () {
        // when the start date is the same as the end date, we need to show one day, not zero.
		return moment(this.get('endDate')).diff( moment(this.get('startDate')), 'days')+1;
	}).property('startDate', 'endDate'),

	style: (function() {
        var scale = 16;
        var startOffset = this.get('startOffset');
        var duration = this.get('duration');
        if (startOffset < 0) {
            // to offset zero, an 'extra' day will be removed
            duration += startOffset-1;
            startOffset = 0;
        }
        return "top: "   + (this.get('track') * ALLOCATION_HEIGHT)  + "px; " +
               "left: "  +       (startOffset * TIME_SCALE)         + "px; " +
               "width: " +          (duration * TIME_SCALE)         + "px; ";
	}).property('startOffset', 'duration')
});