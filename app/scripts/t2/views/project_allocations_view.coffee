App.ProjectAllocationsView = Ember.View.extend
  doubleClick: (evt) ->
    @get('controller').send 'createAllocation'