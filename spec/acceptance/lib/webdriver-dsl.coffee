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
  currentUrl: ->
    log 'currentUrl'
    driver().getCurrentUrl()

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
    log '--executing: script'
    driver().executeScript(script)

  wait: (fn, timeoutInSeconds = 2)->
    log '--executing: wait'
    driver().wait(fn, timeoutInSeconds * 1000)

  screenshot: ->
    driver().takeScreenshot()

extendWithElementFinders = (obj, rootPromiseFn)->
  obj.element = (selector)->
    loc = locator(selector)

    _findElement = ->
      rootPromiseFn().then (root)->
        log '--executing: root.findElement()', selector
        root.findElement(loc)

    el = createElement(_findElement)

    el.present = ->
      log 'present()'
      rootPromiseFn().then (root)->
        log '--executing: root.isElementPresent', selector
        root.isElementPresent(loc)

    el

  obj.elements = (selector)->
    _findElements = ->
      rootPromiseFn().then (root)->
        log '--executing: root.findElements', selector
        root.findElements(locator(selector))

    new Elements(_findElements, selector)

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
Elements = (elementsPromiseFn, selector = '?')->
  self = @
  self._selector = selector

  self._withElements = (cb)->
    elementsPromiseFn().then cb
  self

Elements.prototype.length = ->
  @_withElements (elements)-> elements.length

Elements.prototype.get = (index)->
  log "elements('#{@_selector}').get(#{index})"
  self = @

  _elementPresent = (elements)->
    index >= 0 and index < elements.length

  _assertElementPresent = (elements)->
    if not _elementPresent(elements)
      msg = "Invalid element index: #{index}, range: [0:#{elements.length - 1}] in #{@_selector}!!!"
      log(msg)
      throw new Error(msg)

  _findElement = ->
    self._withElements (elements)->
      _assertElementPresent(elements)
      elements[index]

  el = createElement(_findElement)
  el.present = ->
    self._withElements _elementPresent
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

  new Elements((-> f), "[filtered]#{@_selector}")

#
# Element
#
Element = (elementPromiseFn, selector = "?")->
  self = @
  self._selector = selector

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
    log 'doubleClick()'
    @_withElement (e)->
      seq = e.getDriver().actions()
      seq.doubleClick(e)
      log '--executing: doubleClick()'
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
