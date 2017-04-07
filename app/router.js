import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign_out');
  this.route('bundle', {resetNamespace: true, path: ':startDate'}, function() {
    this.route('office', {resetNamespace: true, path: 'offices/:slug'}, function() {
      this.route('projects', {resetNamespace: true});
      this.route('people', {resetNamespace: true});
    });
  });
});

export default Router;
