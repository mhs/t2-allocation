App.Availability = DS.Model.extend
  url: "#{App.API_BASEURL}/availabilities"
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  duration: (->
    start = moment(@get("startDate")) || moment(@get("endDate")) || moment()
    end = moment(@get("endDate")) || moment(@get("startDate")) || moment()
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  person: DS.belongsTo('person')

  current: true
