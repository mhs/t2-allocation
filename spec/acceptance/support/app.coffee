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

    projects: ->
      dsl.page.elements('.project')

    firstProject: ->
      el = dsl.page.element('.project')
      el.name = -> el.element('.descriptor span').text()
      el.allocations = -> el.elements('.allocationContent')
      el

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

      el.setStartDate = (date)->
        dsl.browser.executeScript """
          (function(){
            $('.modal .start-date').val('#{date}').trigger('change');
            return null;
          })()
        """

      el.setEndDate = (date)->
        dsl.browser.executeScript """
          (function(){
            $('.modal .end-date').val('#{date}').trigger('change');
            return null;
          })()
        """

      el.setPerson = (person)->
        select = el.elements('select').get(0)
        select.elements('option').forEach (option)->
          option.text().then (text)->
            option.click() if text == person

      el.setProject = (project)->
        select = el.elements('select').get(1)
        select.elements('option').forEach (option)->
          option.text().then (text)->
            option.click() if text == project

      el.save = ->
        el.element('button[type="submit"]').click()

      el

module.exports = createApp
