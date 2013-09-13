dsl = require('../lib/webdriver-dsl').dsl

createApp = (port)->
  app =
    url: "http://localhost:#{port}"
    visit: (path)-> dsl.browser.visit "#{@url}/##{path}"

    setCurrentDate: (text)->
      dateSelector = dsl.page.element('.selector')
      dateSelector.click()

      datePicker = dsl.page.element('.selector input')
      datePicker.clear()
      datePicker.enter(text)
      datePicker.enter("\n")

    calendarStartDate: ->
      dsl.page.element('.calendar ul li').text()

    firstProjectName: ->
      dsl.page.element('.project .descriptor span').text()

    allocations: ->
      dsl.page.elements('.allocationContent')

module.exports = createApp

