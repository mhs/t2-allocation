App.ProjectsIndexController = Ember.ArrayController.extend({

  isEditing: false,

  editDate: function () {
    this.set('isEditing', true);
  },

  confirmDate: function (dateValue) {
    var date;
    if(!moment(dateValue).isValid()) {
      dateValue = App.projectsUI.get('date');
    }
    var shortDate = moment(dateValue).format('L');
    this.set('isEditing', false);
    App.projectsUI.set('date', shortDate);
  },

  dateBinding: 'App.projectsUI.date',
  daysInWindowBinding: 'App.projectsUI.daysInWindow',

  dateRange: function () {
    var date = moment(this.get('date'));
    var daysInWindow = this.get('daysInWindow');
    if(!date.isValid()) { date = moment(); }
    var dateArray = [];
    var monday = moment(date).startOf('week').add('days', 1);
    for(var i=0; i<=(daysInWindow/7); i++) {
      dateArray.push(moment(monday).add('week',i).format('MMM D'));
    }
    return dateArray;
  }.property('date','daysInWindow'),

  firstDate: function () { return moment(App.projectsUI.get('date')).format('MMMM D, YYYY'); }.property('date')

});
