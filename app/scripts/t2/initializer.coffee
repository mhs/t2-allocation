Ember.Application.initializer
  name: 'ajaxInitializer'

  initialize: (container, application) ->
    $.ajaxSetup beforeSend: (xhr) ->
      auth = container.lookup("controller:authentication")
      xhr.setRequestHeader("Authorization", auth.get('accessToken'))
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest")

    $(document).ajaxError( ->
      return
      auth = container.lookup("controller:authentication")
      auth.logout()
    )
