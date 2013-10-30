Ember.Application.initializer
  name: 'ajaxInitializer'

  initialize: (container, application) ->
    $.ajaxSetup beforeSend: (xhr) ->
      auth = container.lookup("controller:authentication")
      xhr.setRequestHeader("Authorization", auth.get('accessToken'))
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest")

    #$(document).ajaxError( -> App.AuthenticationController.logout())

Ember.Application.initializer
  name: 'navbarInitializer'
  after: 'ajaxInitializer'

  initialize: (container, application) ->
    url = window.App.NAVBAR_URL
    $.getJSON(url, {}, (data, status, xhr) ->
      top_nav = data.top
      bottom_nav = data.bottom
      $.each top_nav, (idx, entry) ->
        new_entry = $('<a/>').attr('href', entry.url).attr('title', entry.title).html(
          $('<span/>').addClass('icon').html(entry.icon).after($('<strong/>').html(entry.link_text))
        )
        $('.navigation-frame nav.primary .top-content').append(new_entry)

      $.each bottom_nav, (idx, entry) ->
        new_entry = $('<a/>').attr('href', entry.url).attr('title', entry.title).html(
          $('<span/>').addClass('icon').html(entry.icon).after($('<strong/>').html(entry.link_text))
        )
        $('.navigation-frame nav.primary .bottom-content').prepend(new_entry)
    )
