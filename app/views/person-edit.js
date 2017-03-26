`import Ember from "ember";`

PersonEditView = Ember.View.extend
  classNameBindings: ['hover']
  hover: false
  doubleClick: (evt) ->
    person = @get('controller').get('model')
    @get('controller').send 'editPerson', person
    false # to keep from bubbling up
  mouseEnter: (evt, view) ->
    @set 'hover', true
  mouseLeave: (evt, view) ->
    @set 'hover', false

`export default PersonEditView;`
