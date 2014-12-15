`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend({
  location: config.locationType
})

Router.map ->
  @route('sign_out')
  @resource 'bundle', path: ':startDate', ->
    @resource 'office', {path: 'offices/:slug'}, ->
      @resource 'projects'
      @resource 'people'

`export default Router;`
