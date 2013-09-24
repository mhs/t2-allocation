dsl = require('../lib/webdriver-dsl').dsl

decorateProjectElement = (el)->
  el.name = -> el.element('.descriptor span').text()
  el.allocations = -> el.elements('.allocationContent')
  el

projectEditor = (el)->
  xpath = (selector) -> el.element(xpath: selector)

  el_by_label = (label, element = 'input')-> xpath("""//label[contains(., "#{label}")]/following-sibling::#{element}""")

  el_by_text = (text, element)-> xpath("""//#{element}[contains(., "#{text}")]""")

  checkbox = (label)-> xpath("""//label[contains(., "#{label}")]/input[@type="checkbox"]""")
  button = (text)-> el_by_text(text, 'button')

  el.title = -> el.element('.modal-header').text()

  el.name = (value)->
    input = el_by_label('Name')
    if value == undefined
      return input.value()
    else
      input.clear()
      input.enter(value)

  el.billable = (value)->
    input = checkbox('Billable')

    if value == undefined
      return input.checked()
    else
      input.checked().then (isChecked)->
        input.click() if isChecked != value

  el.offices = (value)->
    offices = el.elements('[data-test="office"]')

    if value == undefined
      checked = offices.filter (el)->
        el.element('input').checked()
      checked.map (el) -> el.text()
    else
      # uncheck all
      offices.forEach (o)->
        o.element('input').checked().then (v)->
          e.click() if v

      for office in value
        checkbox(office).click()

  el.notes = (value)->
    input = el_by_label('Notes', 'textarea')

    if value == undefined
      return input.value()
    else
      input.clear()
      input.enter(value)

  el.save = ->
    button('Save').click()

  el.cancel = ->
    button('Cancel').click()

  el

createApp = (host, port)->
  app =
    url: "http://#{host}:#{port}"
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

      selector = '.selector input'

      # This seems to be the most reliable way of setting the date
      dsl.browser.executeScript """
          $('#{selector}').datepicker('setDate', '#{text}');
          $('#{selector}').datepicker('hide');
          return null;
      """

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
      projectEditor(dsl.page.element('.modal'))

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

        select.selectOptionByText(value)

      el.project = (value)->
        select = el.elements('select').get(1)

        if value == undefined
          return select.selectedOptionsText()

        select.selectOptionByText(value)

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

    createProject: (cb)->
      dsl.page.element('.new-project-button').click()
      form = @projectEditor()
      cb(form)

module.exports = createApp
