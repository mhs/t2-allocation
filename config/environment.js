/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 't2-allocation',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    navBarPath: '/api/v1/navbar',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'unsafe-eval' 'self' https://cdn.mxpnl.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' https://api.mixpanel.com http://localhost:5000", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.UA = "UA-XXXXXXXX-Y";
    ENV.DOMAIN = "example.com";
    ENV.SIGN_IN_URL = "http://localhost:5000/sign_in";
    ENV.SIGN_OUT_URL = "http://localhost:5000/sign_out";
    ENV.PEOPLE_URL = "http://localhost:9999/#/people/";
    ENV.API_BASEURL = "http://localhost:5000/api/v1";
    ENV.NAVBAR_URL = "http://localhost:5000/api/v1/navbar";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.UA = "UA-XXXXXXXX-Y";
    ENV.DOMAIN =       "example.com";
    ENV.API_BASEURL =  "http://t2.neo.com/api/v1";
    ENV.SIGN_IN_URL =  "http://t2.neo.com/sign_in";
    ENV.PEOPLE_URL =   "http://t2-people.herokuapp.com/#/people/";
    ENV.SIGN_OUT_URL = "http://t2.neo.com/sign_out";
    ENV.NAVBAR_URL =   "http://t2.neo.com/api/v1/navbar";
  }
  if (environment === 'staging') {
    ENV.API_BASEURL =  "http://t2-staging.neo.com/api/v1";
    ENV.SIGN_IN_URL =  "http://t2-staging.neo.com/sign_in";
    ENV.PEOPLE_URL =   "http://t2people-staging.neo.com/#/people/";
    ENV.SIGN_OUT_URL = "http://t2-staging.neo.com/sign_out";
    ENV.NAVBAR_URL =   "http://t2-staging.neo.com/api/v1/navbar";
  }

  return ENV;
};
