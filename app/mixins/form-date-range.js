`import Ember from "ember";`
`import dateMunge from "t2-allocation/utils/date-munge";`

FormDateRangeMixin = Ember.Mixin.create
  startDateDidChange: (->
    startDate = moment(@get('startDate'))
    endDate = moment(@get('endDate'))

    if endDate && endDate.isBefore(startDate)
      @set('endDate', startDate)
  ).observes('startDate')

  endDateDidChange: (->
    startDate = moment(@get('startDate'))
    endDate = moment(@get('endDate'))

    if startDate && startDate.isAfter(endDate)
      @set('startDate', endDate)
  ).observes('endDate')

  formStartDate: ((k, v) ->
    #setter
    if arguments.length > 1
      @set('startDate', moment(v))

    #getter
    if date = @get('startDate')
      dateMunge date
  ).property('startDate')

  formEndDate: ((k, v) ->
    #setter
    if arguments.length > 1
      @set('endDate', moment(v))

    #getter
    if date = @get('endDate')
      dateMunge date
  ).property('endDate')

`export default FormDateRangeMixin;`
