App.dateMunge = (date) ->
  moment(date).utc().format('YYYY-MM-DD')
