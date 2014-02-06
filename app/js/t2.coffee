
emberDebug = ENV.ENV == 'dev' ? true : false
window.App = Ember.Application.create
  LOG_TRANSITIONS: emberDebug
  LOG_TRANSITIONS_INTERNAL: emberDebug
  LOG_VIEW_LOOKUPS: emberDebug
  LOG_ACTIVE_GENERATION: emberDebug

#Ember.LOG_BINDINGS = true

App.Store = DS.Store.extend()
