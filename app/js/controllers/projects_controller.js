var ALLOCATION_HEIGHT = 16;
var WIDTH_OF_DAY = 16;
var WIDTH_OF_DESCRIPTOR = 192;

App.currentDate = Ember.Object.create({
  date: moment().format("L"),
  daysInWindow: Math.ceil((window.innerWidth-WIDTH_OF_DESCRIPTOR)/WIDTH_OF_DAY)
});

App.ProjectsController = Ember.ArrayController.extend({

  isEditing: false,

  editDate: function () {
    this.set('isEditing', true);
  },

  confirmDate: function (dateValue) {
    var date;
    if(!moment(dateValue).isValid()) {
      dateValue = App.currentDate.get('date');
    }
    var shortDate = moment(dateValue).format('L');
    this.set('isEditing', false);
    App.currentDate.set('date', shortDate);
  },

  dateBinding: 'App.currentDate.date',
  daysInWindowBinding: 'App.currentDate.daysInWindow',

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

  firstDate: function () { return moment(App.currentDate.get('date')).format('MMMM D, YYYY'); }.property('date')

});


App.ProjectsIndexController = Ember.ArrayController.extend({
  createClient: function () {
    // get the name of the client
    var name = this.get('newName');
    if(!name.trim()) { return; }

    // create new Client model
    var client = App.Client.createRecord({
      name: name
    });

    // reset input box
    this.set('newName', '');

    // save client
    client.save();
  }
});

App.ProjectController = Ember.ObjectController.extend({
  content: null,

  // must declare attributes as null in order to create the binding when a model has not been specified in a route
  date: null,
  daysInWindow: null,
  dateBinding: 'App.currentDate.date',
  daysInWindowBinding: 'App.currentDate.daysInWindow',

  trackCount: 0,

  currentAllocations:   (function () {
    var controller = this;
    var allocations = filterAllocationsByDate(this.get('allocations'), controller);
    var trackInfo = buildAllocationTracks(allocations, controller);
    controller.set('trackCount', trackInfo['trackCount']);
    return trackInfo['allocations'];
  }).property('date', 'daysInWindow', 'allocations.@each.project', 'allocations.@each'),


  projectHeight: (function () {
    return "height: " + (this.get('trackCount') * ALLOCATION_HEIGHT + 1) + "px;";
  }).property('trackCount')
});

filterAllocationsByDate = function(allocations, controller) {
  return allocations.filter(function(item) {
    return ( ( moment( item.get('startDate') ) < ( moment(controller.get('date') ).add('days', controller.get('daysInWindow')) ) )  &&
             ( moment( item.get('endDate') )   >   moment(controller.get('date') )                                             ) );
  }, controller = controller);
};
buildAllocationTracks = function(allocations, controller) {
  var people = {}, trackNo = 0;
  trackedAllocations =  allocations.map(
    function(allocation) {
      allocation.set('track', trackNo++);
      return allocation;
    }
  );
  return {allocations: trackedAllocations, trackCount: trackNo};
};

