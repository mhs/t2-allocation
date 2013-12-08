App.PersonAllocationsView = Ember.View.extend
  doubleClick: (evt) ->
    @get('controller').send 'addAllocation'
