'use strict'

webdriver = require('selenium-webdriver')

defer = webdriver.promise.defer
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

  sleep: (ms)->
    driver().sleep(ms)

createElement = (el)->
  new Element(el)

locator = (selector)->
  if selector.linkText
    By.linkText(selector.linkText)
  else
    By.css(selector)

Element = (webElement)->
  @el = webElement
  extendWithElementFinders(@, -> webElement)
  @

extendWithElementFinders = (obj, root)->
  obj.element = (selector)->
    createElement root().findElement(locator(selector))

  obj.elements = (selector)->
    d = defer()
    root().findElements(locator(selector)).then (elements)->
      d.fulfill(elements.map (e)-> createElement(e))
    d.promise

Element.prototype =
  tagName: ->
    @el.getTagName()

  text: ->
    @el.getText()

  click: ->
    @el.click()

  dblclick: ->
    seq = new ActionSequence(driver())
    seq.doubleClick(@el)
    seq.perform()

  enter: (text)->
    @el.sendKeys(text)

  clear: ->
    @el.clear()

  isDisplayed: ->
    @el.isDisplayed()

dsl.page = {}
extendWithElementFinders(dsl.page, driver)

dsl.driver = driver

module.exports =
  dsl: dsl
  install: (scope)->
    require('util')._extend(scope, dsl)
    null
