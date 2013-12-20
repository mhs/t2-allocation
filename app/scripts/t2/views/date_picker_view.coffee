App.DatePickerView = Ember.TextField.extend
  focusIn: (event) ->
    @$().datepicker
      dateFormat: "yy-mm-dd"

Ember.Handlebars.helper('date-picker', App.DatePickerView)
