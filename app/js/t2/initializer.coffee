Ember.Application.initializer
  name: 'ajaxInitializer'

  initialize: (container, application) ->
    $.ajaxSetup beforeSend: (xhr) ->
      auth = container.lookup("controller:authentication")
      xhr.setRequestHeader("Authorization", auth.get('accessToken'))
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest")
      startDate = App.projectsUI.get('startDate')
      if (startDate)
        xhr.setRequestHeader("X-Window-Start", startDate.format('YYYY-MM-DD'))
        xhr.setRequestHeader("X-Window-End", App.projectsUI.get('endDate').format('YYYY-MM-DD'))

    $(document).ajaxError( (event, jqXHR, ajaxSettings, thrownError) ->
      return unless jqXHR.getAllResponseHeaders()
      return if jqXHR.status == 422
      # HAX HAX HAX
      localStorage.removeItem('accessToken')
      return
      auth = container.lookup("controller:authentication")
      auth.logout()
    )
