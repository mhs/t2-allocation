# Install DSL (browser, page, etc.)
require('./lib/webdriver-dsl').install(global)

APP_PORT = 9001

global.app = require('./support/app')(APP_PORT)

# Create two web servers - the application and the api one.
webserver = require('./support/webserver')
global.apiServer = webserver(5000)
global.appServer = webserver(APP_PORT).serveDir('.')

# jasmine syntax extension
global.feature = describe
global.scenario = it
global.xfeature = xdescribe
global.xscenario = xit

jasmine.getEnv().defaultTimeoutInterval = 10000

# Start selenium if needed
require('./support/selenium')
