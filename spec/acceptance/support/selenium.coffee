sync = require('../lib/webdriver-sync')
startSelenium = ->
  SeleniumServer = require('selenium-webdriver/remote').SeleniumServer
  jar = './selenium/selenium-server-standalone.jar'
  chromeDriver = './selenium/chromedriver'
  options =
    port: 4444
    args: ["-Dwebdriver.chrome.driver=#{chromeDriver}"]

  seleniumServer = new SeleniumServer(jar, options)
  sync ->
    seleniumServer.start()

startSelenium()
