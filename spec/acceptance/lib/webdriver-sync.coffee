webdriver = require('selenium-webdriver')
flow = webdriver.promise.controlFlow()

sync = (fn)->
  flow.execute(fn)

module.exports = sync
