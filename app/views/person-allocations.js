`import Ember from "ember";`
`import clickedDate from "t2-allocation/utils/clicked-date";`

PersonAllocationsView = Ember.View.extend
  doubleClick: (evt) ->
    newStartDate = clickedDate(evt.clientX)
    @get('controller').send 'addAllocation', newStartDate

`export default PersonAllocationsView;`
