import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

let App = Ember.Application.extend({
  LOG_TRANSITIONS_INTERNAL: true,
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});


loadInitializers(App, config.modulePrefix);

export default App;
