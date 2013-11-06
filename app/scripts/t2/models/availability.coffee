App.Availability = App.defineModel 'availabilities', 'availability',
  url: "#{App.API_BASEURL}/availabilities"
  startDate: Ember.attr(App.TextDate)
  endDate: Ember.attr(App.TextDate)
  duration: (->
    start = moment(@get("startDate")) || moment(@get("endDate")) || moment()
    end = moment(@get("endDate")) || moment(@get("startDate")) || moment()
    end.diff(start, "days") + 1
  ).property("startDate", "endDate")

  person: Ember.belongsTo("App.Person",
    key: 'person_id'
  )
  current: (-> true)
