jasmineWD = require('./support/jasmine-wd')

APP_HOST = process.env['TEST_APP_HOST'] or 'localhost'
APP_PORT = process.env['TEST_APP_PORT'] or 9001
API_PORT = 5001

# jasmine-node will make these global
module.exports =
  app: require('./support/app')(APP_HOST, APP_PORT)
  apiServer: require('./support/api-server')(API_PORT)
# jasmine syntax extensions
  feature: describe
  xfeature: xdescribe
  xscenario: xit
  scenario: jasmineWD.scenario
  expect: jasmineWD.expect

# Install DSL (browser, page, etc.)
dsl = require('./lib/webdriver-dsl').install(global)
for k,v of dsl
  module.exports[k] = v

jasmine.getEnv().defaultTimeoutInterval = 10000

# Start selenium if needed
require('./support/selenium')
