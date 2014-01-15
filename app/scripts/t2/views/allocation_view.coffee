App.AllocationView = Ember.View.extend
  attributeBindings: ['style']
  styleBinding: "controller.style"
  classNames: ['allocation']
  classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling']

  isExternal: Ember.computed.alias('controller.isExternal')
  isNonbilling: Ember.computed.alias('controller.isNonbilling')
  allocation: Ember.computed.alias('controller.model')
  clicks: []

  click: (evt) ->
    @clicks.push Ember.run.later @, ->
      @get('controller').send 'quickView', @get('allocation')
    , 250

    false # to keep from bubbling up

  doubleClick: (evt) ->
    @clicks.map (click) ->
      Ember.run.cancel click
    @clicks = []
    @get('controller').send 'editAllocation', @get('allocation')
    false # to keep from bubbling up
