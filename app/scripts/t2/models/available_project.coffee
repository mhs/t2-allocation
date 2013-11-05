App.AvailableProject = Ember.Model.extend
  availableProject: true

  availabilities: (->
    App.Availability.find({start_date: '2013-11-4', end_date: '2013-12-31'})
  ).property()
