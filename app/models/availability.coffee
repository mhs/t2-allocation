`import Ember from "ember";`
`import DS from "ember-data";`
`import ENV from "t2-allocation/config/environment";`

Availability = DS.Model.extend
  url: "#{ENV.API_BASEURL}/availabilities"
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  person: DS.belongsTo('person')
  percentAllocated: DS.attr('number')

  current: true

`export default Availability;`
