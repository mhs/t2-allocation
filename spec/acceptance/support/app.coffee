dsl = require('../lib/webdriver-dsl').dsl
sync = require('../lib/webdriver-sync')

decorateProjectElement = (el)->
  el.name = -> el.element('.descriptor span').text()
  el.allocations = -> el.elements('.allocationContent')
  el

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

    projects: ->
      elements = dsl.page.elements('.project')
      oldGet = elements.get
      elements.get = (index)->
        el = oldGet.call(elements, index)
        decorateProjectElement(el)
      elements

    firstProject: ->
      decorateProjectElement(dsl.page.element('.project'))

    projectEditor: ->
      el = dsl.page.element('.modal')
      el.title = ->
        el.element('.modal-header').text()
      el

    allocations: ->
      dsl.page.elements('.allocationContent')

    addAllocationBtn: ->
      dsl.page.element('.new-allocation-button')

    allocationEditor: ->
      el = dsl.page.element('.modal')

      el.startDate = (value)->
        if value == undefined
          return dsl.browser.executeScript "return $('.modal .start-date').val();"

        dsl.browser.executeScript """
            $('.modal .start-date').val('#{value}').trigger('change');
            return null;
        """

      el.endDate = (value)->
        if value == undefined
          return dsl.browser.executeScript "return $('.modal .end-date').val();"

        dsl.browser.executeScript """
            $('.modal .end-date').val('#{value}').trigger('change');
            return null;
        """

      el.billable = (value)->
        input = el.element('[data-test="billable"] input')

        if value == undefined
          return input.checked()

        input.checked().then (isChecked)->
          input.click() if isChecked != value

      el.binding = (value)->
        input = el.element('[data-test="binding"] input')

        if value == undefined
          return input.checked()

        input.checked().then (isChecked)->
          input.click() if isChecked != value

      el.person = (value)->
        select = el.elements('select').get(0)

        if value == undefined
          return select.selectedOptionsText()

        select.elements('option').forEach (option)->
          option.text().then (text)->
            option.click() if text == value

      el.project = (value)->
        select = el.elements('select').get(1)

        if value == undefined
          return select.selectedOptionsText()

        select.elements('option').forEach (option)->
          option.text().then (text)->
            option.click() if text == value

      el.notes = (value)->
        input = el.element('[data-test="notes"] textarea')
        if value == undefined
          return input.text()

        input.clear()
        input.enter(value)

      el.save = ->
        el.element('button[type="submit"]').click()

      el.cancel = ->
        el.elements('.modal-footer button').get(1).click()

      el

module.exports = createApp
