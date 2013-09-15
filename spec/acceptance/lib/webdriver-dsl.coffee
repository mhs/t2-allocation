'use strict'

webdriver = require('selenium-webdriver')
promise = webdriver.promise
defer = promise.defer

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

extendWithElementFinders = (obj, rootPromiseFn)->
  obj.element = (selector)->
    createElement(rootPromiseFn().then (root)-> root.findElement(locator(selector)))

  obj.elements = (selector)->
    new Elements rootPromiseFn().then (root)-> root.findElements(locator(selector))

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

  isDisplayed: ->
    @_elementPromise.then (e)-> e.isDisplayed()

  tap: (cb)->
    cb(@)

dsl.page = {}
extendWithElementFinders(dsl.page, -> promise.when(driver()))

module.exports =
  dsl: dsl
  install: (scope)->
    require('util')._extend(scope, dsl)
    null
