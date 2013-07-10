App.ProjectController = Ember.ObjectController.extend({
  content: null,

  // must declare attributes as null in order to create the binding when a model has not been specified in a route
  date: null,
  daysInWindow: null,
  dateBinding: 'App.projectsUI.date',
  daysInWindowBinding: 'App.projectsUI.daysInWindow',

  trackCount: 0,

  currentAllocations:   (function () {
    var controller = this;
    var allocations = filterAllocationsByDate(this.get('allocations'), controller);
    var trackInfo = buildAllocationTracks(allocations, controller);
    controller.set('trackCount', trackInfo['trackCount']);
    return trackInfo['allocations'];
  }).property('date', 'daysInWindow', 'allocations.@each'),


  projectHeight: (function () {
    return "height: " + (this.get('trackCount') * App.ALLOCATION_HEIGHT + 1) + "px;";
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

