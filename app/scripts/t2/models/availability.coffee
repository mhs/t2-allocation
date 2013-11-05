App.Availability = App.defineModel 'availabilities', 'availability',
  url: "#{App.API_BASEURL}/availabilities"
  startDate: Ember.attr(Date)
  endDate: Ember.attr(Date)
  person: Ember.belongsTo("App.Person",
    key: 'person_id'
  )
