require('./lib/webdriver-dsl').install(global)

assert = require('assert')
webserver = require('./support/webserver')

app = require('./support/app')(9001)
apiServer = webserver(5000)
appServer = webserver(9001).serveDir('.')

allocations = require('./fixtures/allocations.json').allocations;

apiServer.when.get '/api/v1/projects.json', (_, res)->
  res.sendfile('./spec/acceptance/fixtures/projects.json')

apiServer.when.get '/api/v1/people.json', (_, res)->
  res.sendfile('./spec/acceptance/fixtures/people.json')

apiServer.when.get '/api/v1/allocations/:id.json', (req, res)->
  a = allocations.filter (a)->
    a.id == +req.params.id
  res.send(a[0])

before = ->
  apiServer.start().then -> console.log 'apiServer started'
  appServer.start().then -> console.log 'appServer started'
  app.visit('/').then -> console.log 'app visited'

after = ->
  browser.close()
  appServer.stop().then -> console.log 'appServer stopped'
  apiServer.stop().then -> console.log 'appServer stopped'

#1
(->
  before()

  page.elements('article.project').then (els)->
    console.log 'num projects', els.length
    assert.equal(els.length, 2)

  after()
)()

(->
  before()

  el = page.element('article.project')
  el.text().then (text)->
    console.log 'project name:', text
    assert.equal(text, 'Nexia Home', 'first project name')

  after()
)()



