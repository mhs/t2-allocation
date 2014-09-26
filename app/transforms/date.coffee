`import DS from "ember-data";`

DateTransform = DS.Transform.extend
  deserialize: (string) ->
    if !string
      null
    else
      moment(string)

  serialize: (date) ->
    if !date
      return null
    moment(date).format('YYYY-MM-DD')

`export default DateTransform;`
