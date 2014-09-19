/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.UA = "UA-XXXXXXXX-Y";
    ENV.DOMAIN = "example.com";
    ENV.SIGN_IN_URL = "http://localhost:5000/sign_in";
    ENV.SIGN_OUT_URL = "http://localhost:5000/sign_out";
    ENV.PEOPLE_URL = "http://localhost:9999/#/people/";
    ENV.API_BASEURL = "http://localhost:5000/api/v1";
    ENV.NAVBAR_URL = "http://localhost:5000/api/v1/navbar";
  }

  if (environment === 'test') {
    ENV.baseURL = '/'; // Testem prefers this...
  }

  if (environment === 'production') {

  }

  return ENV;
};
