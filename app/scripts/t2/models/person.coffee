App.Person = App.defineModel 'people', 'person',
  id: Ember.attr()
  name: Ember.attr()
  notes: Ember.attr()
  email: Ember.attr()
  unsellable: Ember.attr()
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
  office: Ember.belongsTo("App.Office",
    key: 'office_id'
  )
  allocations: Ember.hasMany("App.Allocation",
    key: "allocation_ids"
  )
  mergedAllocations: (->
    allocations = @get('allocations').filterProperty('current').toArray().sort (a,b)->
      a.get('startDate') - b.get 'startDate'
    merged = []
    start = null
    end = null
    for allocation in allocations
      newStart = allocation.get('startDate')
      newEnd = allocation.get('endDate')
      start ||= newStart
      end ||= newEnd
      if end < newStart
        # if the start is beoyond the previous end, there is a new allocation space
        merged.push {startDate: start, endDate: end}
        start = newStart
        end = newEnd
      else
        # if the start is before, the try and stretch the end
        if end < newEnd
          end = newEnd
    merged.push {startDate: start, endDate: end}
    merged
  ).property("App.projectsUI.startDate", "App.projectsUI.endDate",'allocation.[]','allocations.@each.current')
