`import DS from "ember-data";`
`import ENV from "t2-allocation/config/environment";`
attr = DS.attr
Person = DS.Model.extend
  name: attr('string')
  role: attr('string')
  notes: attr('string')
  email: attr('string')
  unsellable: attr('boolean')
  startDate: attr('date')
  endDate: attr('date')
  office: DS.belongsTo('office')
  allocations: DS.hasMany('allocation')
  percentBillable: DS.attr('number')

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
  ).property("UIGlobal.projectsUI.startDate", "UIGlobal.projectsUI.endDate",'allocations.[]','allocations.@each.current')

  editUrl:(->
    ENV.PEOPLE_URL + @get('id') + '/edit'
  ).property()

`export default Person;`
