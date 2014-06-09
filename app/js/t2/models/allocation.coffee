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

  conflicts: DS.hasMany('conflict')

  track: 0

  current: (->
    @get("startDate") <= App.projectsUI.get("endDate") and @get("endDate") >= App.projectsUI.get("startDate")
  ).property("startDate","endDate","App.projectsUI.startDate", "App.projectsUI.endDate")

  vacation: Ember.computed.alias('project.vacation')

  status: (->
    words = []
    words.push(if @get('billable') then "Billable" else "Non-Billable")
    words.push("Provisional") if @get('provisional')
    words.push("Vacation") if @get('vacation')
    words.join(" / ")
  ).property("provisional", "billable")
