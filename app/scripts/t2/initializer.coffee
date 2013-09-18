Ember.Application.initializer
  name: 'ajaxInitializer'

  initialize: (container, application) ->
    $.ajaxSetup beforeSend: (xhr) ->
      auth = container.lookup("controller:authentication")
      xhr.setRequestHeader("Authorization", auth.get('accessToken'))
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest")


Ember.Application.initializer
  name: 'authenticationInitializer'
  after: 'ajaxInitializer'
  initialize: (container, application) ->
    auth = container.lookup('controller:authentication')
    auth.extractAccessToken()
