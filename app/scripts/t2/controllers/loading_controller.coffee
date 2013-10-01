App.LoadingController = Ember.Controller.extend
  progress: null

  init: ->
    self = @
    chars = '◴◷◶◵'
    currIdx = 0

    _updateProgress = ->
      self.set('progress', chars[currIdx++ % chars.length])

    @_timer = setInterval _updateProgress, 150

    _updateProgress()

  stop: ->
    clearInterval @_timer if @_timer?
    @_timer = null
