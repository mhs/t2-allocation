# Shamelessly stolen from angular/protractor jasminewd.js

webdriver = require('selenium-webdriver')
wdSync = require('../lib/webdriver-sync')

scenario = (name, fn)->
  it name, (done)->
    succ = -> done()
    err = done
    wdSync(fn).then(succ, err)

jasmineExpect = global.expect

expect = (actual)->
  if actual instanceof webdriver.promise.Promise
    promiseMatchers(actual)
  else
    jasmineExpect(actual)

promiseMatchers = (actualPromise)->
  promises = {}
  for matcherName of jasmine.Matchers.prototype
    promises[matcherName] = wrapMatcher(matcherName, actualPromise)
  promises

wrapMatcher = (matcherName, actualPromise)->
  (expected)->
    actualPromise.then (actual)->
      jasmineExpect(actual)[matcherName](expected)

module.exports =
  scenario: scenario
  expect: expect
