App.Allocation = DS.Model.extend
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  project: DS.belongsTo('project')
  person: DS.belongsTo('person')
  billable: DS.attr('boolean')
  binding: DS.attr('boolean')
  provisional: DS.attr('boolean')
  notes: DS.attr('string')
  person: DS.belongsTo('person')
  project: DS.belongsTo('project')
  percentAllocated: DS.attr('number')

  #TODO: confirm that didCommit will fire correctly
  init: ->
    @_super()
    @on 'didDelete', @, @pokeAllocations
    @on 'didCreate', @, @pokeAllocations
    @on 'didUpdate', @, @pokeAllocations

  pokeAllocations: ->
    App.projectsUI.incrementProperty('allocationUpdates')

  track: 0
  current: (->
    @get("startDate") <= App.projectsUI.get("endDate") and @get("endDate") >= App.projectsUI.get("startDate")
  ).property("startDate","endDate","App.projectsUI.startDate", "App.projectsUI.endDate")
  duration: (->
    start = moment(@get("startDate")) || moment(@get("endDate")) || moment()
    end = moment(@get("endDate")) || moment(@get("startDate")) || moment()
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  vacation: Ember.computed.alias('project.vacation')

  status: (->
    words = []
    words.push(if @get('billable') then "Billable" else "Non-Billable")
    words.push("Exclusive") if @get('binding')
    words.push("Provisional") if @get('provisional')
    words.push("Vacation") if @get('vacation')
    words.join(" / ")
  ).property("provisional", "binding", "billable")
