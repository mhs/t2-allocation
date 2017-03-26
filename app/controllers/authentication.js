`import Ember from "ember";`
`import ENV from "t2-allocation/config/environment";`

_redirectTo = (url)->
  uri = url
  uri += "?return_url=" + escape(location.href)
  location.href = uri


AuthenticationController = Ember.ObjectController.extend
  init: -> @set('accessToken', localStorage.accessToken)

  accessToken: null
  isAuthenticated: Ember.computed.notEmpty('accessToken')

  _redirectToSignIn: ->
    _redirectTo ENV.SIGN_IN_URL

  _redirectToSignOut: ->
    _redirectTo ENV.SIGN_OUT_URL

  extractAccessToken: ->
    match = location.href.match(/authentication_token=([a-zA-Z0-9_-]+)/)
    if (match)
      # HAX - see if this lets FF log in
      localStorage.accessToken = match[1]
      @set('accessToken', match[1])
      location.href = location.origin

  login: ->
    @_redirectToSignIn()

  logout: ->
    @set('accessToken', null)
    @_redirectToSignOut()

  accessTokenChanged: (->
    token = @get('accessToken')

    if (token)
      localStorage.accessToken = token
    else
      delete localStorage.accessToken
  ).observes("accessToken")

  currentUser: (->
    person = {}
    Ember.$.ajax({
      # ASYNC MY BALLS
      async: false,
      url: "#{ENV.API_BASEURL}/profile.json",
      dataType: 'json',
      data: {},
      success: (data) ->
        person = data.person
      }
    )
    person
  ).property('accessToken')

`export default AuthenticationController;`
