'use strict'

webdriver = require('selenium-webdriver')

defer = webdriver.promise.defer
By = webdriver.By

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

Element = (webElement)->
  @el = webElement
  @

Element.prototype =
  tagName: ->
    @el.getTagName()

  text: ->
    @el.getText()

  click: ->
    @el.click()

  enter: (text)->
    @el.sendKeys(text)

  clear: ->
    @el.clear()

dsl.page = (->
  createElement = (el)->
    new Element(el)

  locator = (selector)->
    By.css(selector)

  page =
    element: (selector)->
      createElement driver().findElement(locator(selector))

    elements: (selector)->
      d = defer()
      driver().findElements(locator(selector)).then (elements)->
        d.fulfill(elements.map (e)-> createElement(e))
      d.promise
)()

dsl.driver = driver

module.exports =
  dsl: dsl
  install: (scope)->
    require('util')._extend(scope, dsl)
    null
