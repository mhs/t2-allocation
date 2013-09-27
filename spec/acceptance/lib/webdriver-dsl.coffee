'use strict'

webdriver = require('selenium-webdriver')
promise = webdriver.promise
_ = require('underscore')

CONSOLE_LOG = console.log.bind(null, 'DSL:')
NULL_LOG = ->
log = NULL_LOG

By = webdriver.By
ActionSequence = webdriver.ActionSequence

config =
  seleniumAddress: 'http://localhost:4444/wd/hub'
  capabilities:
    browserName: 'chrome'

createDriver = ()->
  log '## new session ##'
  new webdriver.Builder()
    .usingServer(config.seleniumAddress)
    .withCapabilities(config.capabilities).build();

driver = ()->
  driver._instance or (driver._instance = createDriver())

dsl = {}
dsl.browser =
  visit: (url)->
    log 'visit', url
    driver().get(url)

  close: ->
    log 'closing browser'
    d = driver()
    driver._instance = null
    d.quit()

  sleep: (seconds)->
    driver().sleep(seconds * 1000)

  executeScript: (script)->
    driver().executeScript(script)

  wait: (fn, timeoutInSeconds = 2)->
    driver().wait(fn, timeoutInSeconds * 1000)

  screenshot: ->
    driver().takeScreenshot()

extendWithElementFinders = (obj, rootPromiseFn)->
  obj.element = (selector)->
    loc = locator(selector)

    _findElement = ->
      rootPromiseFn().then (root)->
        log 'root.findElement()', selector
        root.findElement(loc)

    el = createElement(_findElement)

    el.present = ->
      log 'present()'
      rootPromiseFn().then (root)->
        log 'root.isElementPresent', selector
        root.isElementPresent(loc)

    el

  obj.elements = (selector)->
    _findElements = ->
      rootPromiseFn().then (root)->
        log 'root.findElements', selector
        root.findElements(locator(selector))

    new Elements(_findElements)

createElement = (elPromise)->
  new Element(elPromise)

locator = (selector)->
  if selector.linkText
    By.linkText(selector.linkText)
  else if selector.xpath
    By.xpath(selector.xpath)
  else
    By.css(selector)

#
# Elements
#
Elements = (elementsPromiseFn)->
  self = @
  self._withElements = (cb)->
    elementsPromiseFn().then cb
  self

Elements.prototype.length = ->
  @_withElements (elements)-> elements.length

Elements.prototype.get = (index)->
  self = @
  _findElement = ->
    self._withElements (elements)-> elements[index]

  el = createElement(_findElement)
  el.present = ->
    self._withElements (elements)->
      index >= 0 and index < elements.length
  el

Elements.prototype.forEach = (iterator)->
  @_withElements (elements)->
    elements.forEach (el)->
      iterator createElement(-> el)

# @return promise of Array
Elements.prototype.map = (fn)->
  _result = []

  mapElement = (el)->
    _result.push fn(el)

  @forEach(mapElement)
    .then -> promise.fullyResolved(_result)

# @return Elements
Elements.prototype.filter = (check)->
  self = @
  _filtered = []

  filter = ->
    self._withElements (webElements)->
      webElements.forEach (webElement)->
        el = createElement(-> webElement)
        _filtered.push check(el).then (ok)->
          if ok then webElement else null

  f = filter()
    .then -> promise.fullyResolved(_filtered)
    .then (arr)->
      _.compact(arr)

  new Elements -> f

#
# Element
#
Element = (elementPromiseFn)->
  self = @

  extendWithElementFinders(self, elementPromiseFn)

  self._exec = (name, args)->
    self._withElement (e)->
      log "--executing: #{name}(#{if args == undefined then '' else args})"
      e[name].apply(e, args)

  self._withElement = (cb)->
    elementPromiseFn().then cb

  @

Element.prototype =
  tagName:   -> @_exec('getTagName')
  text:      -> @_exec('getText')
  click:     -> @_exec('click')
  clear:     -> @_exec('clear')
  displayed: -> @_exec('isDisplayed')
  checked:   -> @_exec('isSelected')
  selected:  -> @_exec('isSelected')
  value:     -> @_exec('getAttribute', ['value'])
  enter: (text)-> @_exec('sendKeys', arguments)

  dblclick: ->
    log '-- doubleClick()'
    @_withElement (e)->
      log 'executing: doubleClick()'
      seq = e.getDriver().actions()
      seq.doubleClick(e)
      seq.perform()

  tap: (cb)-> cb(@)

  selectedOptions: ()->
    _selected = []

    options = @elements('option')

    checkOption = (option)->
      _selected.push option.selected().then (selected)->
        if selected then option else null

    options.forEach(checkOption)
      .then ()-> promise.fullyResolved(_selected)
      .then (arr)->
        _.compact(arr)

  selectedOptionsText: ()->
    _texts = []

    collectOption = (options)->
      options.forEach (option)->
        _texts.push option.text().then (text)-> text

    @selectedOptions().then(collectOption)
      .then ()-> promise.fullyResolved(_texts)
      .then (arr)-> arr.join('')

  selectOptionByText: (optionText)->
    @elements('option').forEach (option)->
      option.text().then (text)->
        option.click() if text == optionText

dsl.page = {}
extendWithElementFinders(dsl.page, -> promise.when(driver()))

module.exports =
  dsl: dsl
  logging: (enable)->
    log = if enable then CONSOLE_LOG else NULL_LOG
  install: (scope)->
    require('util')._extend(scope, dsl)
    null
