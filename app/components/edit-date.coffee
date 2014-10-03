`import Ember from "ember";`

EditDateView = Ember.TextField.extend
  didInsertElement: ->
    @$().focus()

  focusIn: (event) ->
    self = @
    @set "value", moment(UIGlobal.projectsUI.get("date")).format("YYYY-MM-DD")
    @$().datepicker
      dateFormat: "yy-mm-dd"
      onClose: (date)->
        self.triggerAction(actionContext: date)

`export default EditDateView;`
