Ember.Application.initializer
  name: 'ajaxInitializer'

  initialize: (container, application) ->
    $.ajaxSetup beforeSend: (xhr) ->
      auth = container.lookup("controller:authentication")
      xhr.setRequestHeader("Authorization", auth.get('accessToken'))
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest")

    $(document).ajaxError( (event, jqXHR, ajaxSettings, thrownError) ->
      return unless jqXHR.getAllResponseHeaders()
      return if jqXHR.status == 422
      debugger
      auth = container.lookup("controller:authentication")
      auth.logout()
    )
