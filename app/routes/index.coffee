`import Ember from "ember";`

IndexRoute = Ember.Route.extend
  afterModel: (model, transition) ->
    office_slug = @controllerFor('authentication').get('currentUser').office_slug
    @transitionTo('projects', moment().format("YYYY-MM-DD"), office_slug)

`export default IndexRoute;`
