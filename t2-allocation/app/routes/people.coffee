`import Ember from "ember";`

PeopleRoute = Ember.Route.extend
  model: ->
    @modelFor('office').get('activePeople')

`export default PeopleRoute;`
