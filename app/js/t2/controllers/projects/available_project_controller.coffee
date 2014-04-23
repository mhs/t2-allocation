App.AvailableProjectController  = Ember.ObjectController.extend
  needs: ['application', 'projects', 'office']

  startDate: Ember.computed.alias('App.projectsUI.startDate')
  endDate: Ember.computed.alias('App.projectsUI.endDate')
  selectedOffice: Ember.computed.alias('controllers.office.model')
  people: Ember.computed.alias('selectedOffice.people')

  trackCount: 0

  currentAvailabilities: (->
    availabilities = @get("availabilities")

    trackNo = 0
    App.group_by_sorted_name(availabilities, (avs, person) ->
      avs.forEach (av) ->
        av.set("track", trackNo)
      trackNo++
    )
    @set "trackCount", trackNo
    availabilities
  ).property('availabilities.[]')

  availabilities: (->
    people = @get('people')
    @get('allAvailabilities').filter (availability) ->
      people.contains(availability.get('person'))
  ).property('people', 'allAvailabilities.[]')

  allAvailabilities: (->
    @store.all('availability')
  ).property('startDate', 'endDate')

  actions:
    addAllocation: ->
      @send 'createAllocation', {}
