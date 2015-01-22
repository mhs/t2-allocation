`import Ember from "ember";`
`import { group_by_sorted_name } from "t2-allocation/utils/group-by";`

AvailableProjectController  = Ember.ObjectController.extend
  needs: ['application', 'projects', 'office']

  startDate: Ember.computed.alias('UIGlobal.projectsUI.startDate')
  endDate: Ember.computed.alias('UIGlobal.projectsUI.endDate')
  selectedOffice: Ember.computed.alias('controllers.office.model')
  people: Ember.computed.alias('selectedOffice.people')

  trackCount: 0

  currentAvailabilities: (->
    availabilities = @get("availabilities")

    trackNo = 0
    group_by_sorted_name(availabilities, (avs, person) ->
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

  allAvailabilities: Ember.computed 'model.bundle.availabilities.@each.id', ->
    @get('bundle.availabilities')

  actions:
    addAllocation: ->
      @send 'createAllocation', {}

`export default AvailableProjectController;`
