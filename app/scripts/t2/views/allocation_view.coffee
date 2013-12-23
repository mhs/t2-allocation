App.AllocationView = Ember.View.extend
  attributeBindings: ['style']
  styleBinding: "controller.style"
  classNames: ['allocation']
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling']

  isExternal: Ember.computed.alias('controller.isExternal')
  isNonbilling: Ember.computed.alias('controller.isNonbilling')
  allocation: Ember.computed.alias('controller.model')

  click: (evt) ->
    @get('controller').send 'quickView', @get('allocation')
    false # to keep from bubbling up

  doubleClick: (evt) ->
    @get('controller').send 'editAllocation', @get('allocation')
    false # to keep from bubbling up
