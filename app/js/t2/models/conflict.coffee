App.Conflict = DS.Model.extend

  allocations: DS.hasMany('allocation')
  person: DS.belongsTo('person')

  startDate: DS.attr('date')
  endDate: DS.attr('date')
  percentAllocated: DS.attr('number')

  duration: (->
    start = moment(@get("startDate"))
    end = moment(@get("endDate"))
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

