App.PeopleRoute = Ember.Route.extend
  model: ->
    @modelFor('office').get('people')
