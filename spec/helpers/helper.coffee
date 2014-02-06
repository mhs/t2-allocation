App.setupForTesting()
window.context = describe

_classes = ($el)->
  $el.attr('class').split(' ')

beforeEach ->
  @addMatchers
    toHaveClass: (expected)->
      classes = _classes(@actual)
      classes.indexOf(expected) > -1
