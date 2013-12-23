App.ProjectEditView = Ember.View.extend
  classNameBindings: ['hover']
  hover: false
  doubleClick: (evt) ->
    project = @get('controller').get('model')
    @get('controller').send 'editProject', project
    false # to keep from bubbling up
  mouseEnter: (evt, view) ->
    @set 'hover', true
  mouseLeave: (evt, view) ->
    @set 'hover', false
