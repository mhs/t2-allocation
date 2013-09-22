App.AuthenticationController = Ember.ObjectController.extend
  init: -> @set('accessToken', localStorage.accessToken)

  accessToken: null

  isAuthenticated: Ember.computed.notEmpty('accessToken')

  redirectToSignIn: ->
    uri = window.ENV.apiHost + "/sign_in?"
    uri += "&return_url=" + escape(location.protocol + "//" + location.host)
    location.href = uri

  logout: ->
    @set('accessToken', null)
    location.href = window.ENV.apiHost + "/sign_out"

  extractAccessToken: ->
    match = location.href.match(/authentication_token=([a-zA-Z0-9]+)/)
    if (match)
      @set('accessToken', match[1])

  accessTokenChanged: (->
    token = @get('accessToken')

    if (token)
      localStorage.accessToken = token
    else
      delete localStorage.accessToken
  ).observes("accessToken")
