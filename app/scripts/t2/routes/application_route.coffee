App.ApplicationRoute = Ember.Route.extend
  beforeModel: (transition)->
    auth = @controllerFor('authentication')
    auth.extractAccessToken()
    if not auth.get('isAuthenticated')
      transition.abort()
      auth.login()

  model: ->
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
    Ember.RSVP.all([
      App.Office.fetch(),
      App.Project.fetch(),
      App.Person.fetch(),
      App.Allocation.fetch()
    ])

  actions:
    selectOffice: (office)->
      @transitionTo('offices.projects', office)

    error: (err) ->
      auth = @controllerFor('authentication')
      auth.login()

    openModal: (modal) ->
      @render modal,
        into: "application"
        outlet: "modal"

    closeModal: ->
      self = @
      App.animateModalClose().then ->
        self.render "empty",
          into: "application"
          outlet: "modal"

