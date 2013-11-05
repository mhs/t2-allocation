App.AvailabilityView = Ember.View.extend
  attributeBindings: ['style']
  styleBinding: "controller.style"
  classNames: ['allocation'] # TODO: change this
  classNameBindings: ['isExternal:external']

  isExternal: Ember.computed.alias('controller.isExternal')
  allocation: Ember.computed.alias('controller.model')

  doubleClick: (evt) ->
    @get('controller').send 'editAllocation', @get('allocation')
    false # to keep from bubbling up
