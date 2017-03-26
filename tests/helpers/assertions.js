checkDate = (knownDate, testedDate, assertion) ->
  equal(knownDate.format('YYYY-MM-DD'), testedDate.format('YYYY-MM-DD'), assertion)

`export { checkDate }`
