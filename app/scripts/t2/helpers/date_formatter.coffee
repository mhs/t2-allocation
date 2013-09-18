Ember.Handlebars.helper "shortDate", (unformatted_date) ->
  date = makeDate(unformatted_date)
  date.monthName + " " + date.day

makeDate = (unformatted_date) ->
  date = new Date(unformatted_date)
  if date instanceof Date
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    pad = (num) ->
      (if num < 10 then "0" + num else "" + num)

    year: date.getUTCFullYear()
    month: date.getUTCMonth()
    monthName: months[date.getUTCMonth()]
    day: pad(date.getUTCDate())
    weekday: days[date.getUTCDay()]
    hour: date.getUTCHours()
    minutes: date.getUTCMinutes()
    seconds: date.getUTCSeconds()
  else if date is `undefined`
    `undefined`
  else
    null
