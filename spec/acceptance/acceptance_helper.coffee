webserver = require('./support/webserver')

APP_PORT = 9001
# jasmine-node will make these global
module.exports =
  app: require('./support/app')(APP_PORT)
  apiServer: webserver(5000)
  appServer: webserver(APP_PORT).serveDir('.')
# jasmine syntax extensions
  feature: describe
  scenario: it
  xfeature: xdescribe
  xscenario: xit

# Install DSL (browser, page, etc.)
dsl = require('./lib/webdriver-dsl').install(global)
for k,v of dsl
  module.exports[k] = v

jasmine.getEnv().defaultTimeoutInterval = 10000

# Start selenium if needed
require('./support/selenium')
