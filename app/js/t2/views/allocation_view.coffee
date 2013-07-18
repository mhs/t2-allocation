App.AllocationView = Ember.View.extend
  templateName: "allocation"
  attributeBindings: ["style"]
  styleBinding: "controller.style"
  click: (evt) ->
    allocation = @get('controller').get('model')
    @get('controller').send 'editAllocation', allocation