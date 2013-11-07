App.AvailabilityView = Ember.View.extend
  attributeBindings: ['style']
  styleBinding: "controller.style"
  classNames: ['allocation', 'available']
  classNameBindings: ['isExternal:external']

  isExternal: Ember.computed.alias('controller.isExternal')
  allocation: Ember.computed.alias('controller.model')

  doubleClick: (evt) ->
    allocationInfo =
      startDate: @get('allocation.startDate')
      endDate: @get('allocation.endDate')
      person: @get('allocation.person')
    @get('controller').send 'createAllocation', allocationInfo
    false # to keep from bubbling up
