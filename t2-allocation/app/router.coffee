`import Ember from 'ember';`

Router = Ember.Router.extend({
  location: T2AllocationENV.locationType
})

Router.map ->
  @route('sign_out')
  @resource 'bundle', path: ':startDate', ->
    @resource 'office', {path: 'offices/:slug'}, ->
      @resource 'projects'
      @resource 'people'

`export default Router;`
