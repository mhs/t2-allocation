dsl = require('../lib/webdriver-dsl').dsl

createApp = (port)->
  app =
    url: "http://localhost:#{port}"
    visit: (path)-> dsl.browser.visit "#{@url}/##{path}"

    dateSelector: ->
      dsl.page.element('.selector span')

    datePicker: ->
      el = dsl.page.element('#ui-datepicker-div')
      el.selectDay = (day)->
        el.element(linkText: day.toString()).click()
      el

    setCurrentDate: (text)->
      @dateSelector().click()

      dateInput = dsl.page.element('.selector input')
      dateInput.clear()
      dateInput.enter("#{text}\n")

    calendarStartDate: ->
      dsl.page.element('.calendar ul li').text()

    firstProjectName: ->
      dsl.page.element('.project .descriptor span').text()

    allocations: ->
      dsl.page.elements('.allocationContent')

module.exports = createApp

