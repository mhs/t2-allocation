App.PeopleRoute = Ember.Route.extend
  model: ->
    @modelFor('office').get('people')

  actions:
    createAllocation: (allocationAttrs={}) ->
      __hackEmberModel()
      defaults =
        startDate: new Date()
        endDate: new Date(moment().add(2,'weeks').format('L'))
      @send 'editAllocation', App.Allocation.create(Ember.merge(defaults, allocationAttrs))

    editAllocation: (allocation) ->
      @controllerFor("allocations.modal").edit allocation
      @send "openModal", "allocations.modal"
