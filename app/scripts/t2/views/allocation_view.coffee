App.AllocationView = Ember.View.extend
  templateName: "allocation"
  attributeBindings: ["style"]
  styleBinding: "controller.style"
  doubleClick: (evt) ->
    allocation = @get('controller').get('model')
    @get('controller').send 'editAllocation', App.AllocationEditObject.create(model: allocation)
    false # to keep from bubbling up
