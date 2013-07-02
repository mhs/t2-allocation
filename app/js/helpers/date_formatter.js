Ember.Handlebars.helper('shortDate', function(unformatted_date) {
  var date = makeDate(unformatted_date);
  return date.monthName + " " + date.day;
});

makeDate = function(unformatted_date) {
  date = new Date(unformatted_date);

  if (date instanceof Date) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var pad = function(num) {
      return num < 10 ? "0"+num : ""+num;
    };

    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth(),
      monthName: months[date.getUTCMonth()],
      day: pad( date.getUTCDate() ),
      weekday: days[date.getUTCDay()],
      hour: date.getUTCHours(),
      minutes: date.getUTCMinutes(),
      seconds: date.getUTCSeconds()
    };
    // var dayOfWeek = days[utcDay];
    // var dayOfMonth = pad(utcDayOfMonth);
    // var month = months[utcMonth];
  
    // }
    // var utcYear = date.getUTCFullYear(),
    //     utcMonth = date.getUTCMonth(),
    //     utcDayOfMonth = date.getUTCDate(),
    //     utcDay = date.getUTCDay(),
    //     utcHours = date.getUTCHours(),
    //     utcMinutes = date.getUTCMinutes(),
    //     utcSeconds = date.getUTCSeconds();

    // var dayOfWeek = days[utcDay];
    // var dayOfMonth = pad(utcDayOfMonth);
    // var month = months[utcMonth];

    // return month + " " + dayOfMonth;
  } else if (date === undefined) {
    return undefined;
  } else {
    return null;
  }
};