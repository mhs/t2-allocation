
emberDebug = '@@EMBER_DEBUG' != 'false'
window.App = Ember.Application.create
  LOG_TRANSITIONS: emberDebug
  LOG_TRANSITIONS_INTERNAL: emberDebug
  LOG_VIEW_LOOKUPS: emberDebug
  LOG_ACTIVE_GENERATION: emberDebug

#Ember.LOG_BINDINGS = true

window.App.API_BASEURL = "@@API_BASEURL"
window.App.SIGN_IN_URL = "@@SIGN_IN_URL"
window.App.SIGN_OUT_URL = "@@SIGN_OUT_URL"
window.App.NAVBAR_URL = "@@NAVBAR_URL"
window.App.PEOPLE_URL = "@@PEOPLE_URL"
App.Store = DS.Store.extend()
