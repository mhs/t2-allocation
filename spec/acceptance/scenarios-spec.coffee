'use strict'

require('./acceptance_helper')

feature 'Project list', ->

  beforeEach ->
    # Fixtures
    allocations = require('./fixtures/allocations.json').allocations

    apiServer.when.get '/api/v1/projects.json', (_, res)->
      res.sendfile('./spec/acceptance/fixtures/projects.json')

    apiServer.when.get '/api/v1/people.json', (_, res)->
      res.sendfile('./spec/acceptance/fixtures/people.json')

    apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
      a = allocations.filter (a)->
        a.id == +req.params.id
      res.send(a[0])

  beforeEach ->
    apiServer.start()
    appServer.start()

  beforeEach ->
    app.visit('/')

  afterEach ->
    browser.close()
    appServer.stop()
    apiServer.stop()

  scenario 'display projects', (done)->
    page.elements('article.project').then (els)->
      expect(els.length).toBeGreaterThan(0)
      done()

  scenario 'projects have names', (done)->
    el = page.element('article.project')
    el.text().then (text)->
      expect(text).toBe('Nexia Home')
      done()
