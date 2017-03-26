// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ENV from "t2-allocation/config/environment";

let _redirectTo = function(url){
  let uri = url;
  uri += `?return_url=${escape(location.href)}`;
  return location.href = uri;
};


let AuthenticationController = Ember.ObjectController.extend({
  init() { return this.set('accessToken', localStorage.accessToken); },

  accessToken: null,
  isAuthenticated: Ember.computed.notEmpty('accessToken'),

  _redirectToSignIn() {
    return _redirectTo(ENV.SIGN_IN_URL);
  },

  _redirectToSignOut() {
    return _redirectTo(ENV.SIGN_OUT_URL);
  },

  extractAccessToken() {
    let match = location.href.match(/authentication_token=([a-zA-Z0-9_-]+)/);
    if (match) {
      // HAX - see if this lets FF log in
      localStorage.accessToken = match[1];
      this.set('accessToken', match[1]);
      return location.href = location.origin;
    }
  },

  login() {
    return this._redirectToSignIn();
  },

  logout() {
    this.set('accessToken', null);
    return this._redirectToSignOut();
  },

  accessTokenChanged: (function() {
    let token = this.get('accessToken');

    if (token) {
      return localStorage.accessToken = token;
    } else {
      return delete localStorage.accessToken;
    }
  }).observes("accessToken"),

  currentUser: (function() {
    let person = {};
    Ember.$.ajax({
      // ASYNC MY BALLS
      async: false,
      url: `${ENV.API_BASEURL}/profile.json`,
      dataType: 'json',
      data: {},
      success(data) {
        return person = data.person;
      }
      }
    );
    return person;
  }).property('accessToken')
});

export default AuthenticationController;
