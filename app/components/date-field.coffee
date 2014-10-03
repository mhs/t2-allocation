`import Ember from "ember";`
DateField = Ember.TextField.extend(
  type: "date"
  date: ( (key, date) ->
    if date
      @set "value", moment(date).format('YYYY-MM-DD')
    else
      value = @get("value")
      if value
        date = moment(value)
      else
        date = null
    date
  ).property("value")
)

`export default DateField;`
