// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign_out');
  return this.resource('bundle', {path: ':startDate'}, function() {
    return this.resource('office', {path: 'offices/:slug'}, function() {
      this.resource('projects');
      return this.resource('people');
    });
  });
});

export default Router;
