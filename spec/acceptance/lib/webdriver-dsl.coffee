'use strict'

webdriver = require('selenium-webdriver')
sync = require('./webdriver-sync')
promise = webdriver.promise
defer = promise.defer
_ = require('underscore')

By = webdriver.By
ActionSequence = webdriver.ActionSequence

config =
  seleniumAddress: 'http://localhost:4444/wd/hub'
  capabilities:
    browserName: 'chrome'

createDriver = ()->
  new webdriver.Builder()
    .usingServer(config.seleniumAddress)
    .withCapabilities(config.capabilities).build();

driver = ()->
  driver._instance or (driver._instance = createDriver())

dsl = {}
dsl.browser =
  visit: (url)->
    driver().get(url)

  close: ->
    d = driver()
    driver._instance = null
    d.quit()

  sleep: (seconds)->
    driver().sleep(seconds * 1000)

  executeScript: (script)->
    driver().executeScript(script)

  wait: (fn, timeoutInSeconds = 2)->
    driver().wait(fn, timeoutInSeconds * 1000)

extendWithElementFinders = (obj, rootPromiseFn)->
  obj.element = (selector)->
    loc = locator(selector)

    rootPromise = rootPromiseFn()

    _promise = sync ->
      rootPromise.then (root)-> root.findElement(loc)

    el = createElement(_promise)

    el.present = ->
      rootPromise.then (root)-> root.isElementPresent(loc)

    el

  obj.elements = (selector)->
    rootPromise = rootPromiseFn()

    _promise = sync ->
      rootPromise.then (root)-> root.findElements(locator(selector))
    new Elements(_promise)

createElement = (elPromise)->
  new Element(elPromise)

locator = (selector)->
  if selector.linkText
    By.linkText(selector.linkText)
  else
    By.css(selector)

#
# Elements
#
Elements = (elementsPromise)->
  @_elementsPromise = elementsPromise
  @

Elements.prototype._wrapInPormise = (fn)->
  d = defer()
  @_elementsPromise.then (elements)->
    d.fulfill(fn(elements))
  d.promise

Elements.prototype.length = ->
  @_wrapInPormise (elements)-> elements.length

Elements.prototype.get = (index)->
  createElement(@_wrapInPormise (elements)-> elements[index])

Elements.prototype.forEach = (iterator)->
  @_elementsPromise.then (elements)->
    elements.forEach (el)->
      iterator createElement(el)
#
# Element
#
Element = (elementPromise)->
  extendWithElementFinders(@, -> elementPromise)
  @_elementPromise = elementPromise
  @

Element.prototype =
  tagName: ->
    @_elementPromise.then (e)-> e.getTagName()

  text: ->
    @_elementPromise.then (e)-> e.getText()

  click: ->
    @_elementPromise.then (e)-> e.click()

  dblclick: ->
    _driver = driver()
    @_elementPromise.then (e)->
      seq = new ActionSequence(_driver)
      seq.doubleClick(e)
      seq.perform()

  enter: (text)->
    @_elementPromise.then (e)-> e.sendKeys(text)

  clear: ->
    @_elementPromise.then (e)-> e.clear()

  displayed: ->
    @_elementPromise.then (e)-> e.isDisplayed()

  tap: (cb)->
    cb(@)

  checked: ->
    @_elementPromise.then (e)-> e.isSelected()

  selected: ->
    @_elementPromise.then (e)-> e.isSelected()

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


dsl.page = {}
extendWithElementFinders(dsl.page, -> promise.when(driver()))

module.exports =
  dsl: dsl
  install: (scope)->
    require('util')._extend(scope, dsl)
    null
