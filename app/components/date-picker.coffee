`import Ember from "ember";`

DatePickerComponent = Ember.TextField.extend
  focusIn: (event) ->
    @$().datepicker
      dateFormat: "yy-mm-dd"

`export default DatePickerComponent;`
