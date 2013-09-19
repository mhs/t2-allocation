App.EditDateView = Ember.TextField.extend
  didInsertElement: ->
    @$().focus()

  focusIn: (event) ->
    self = @
    @set "value", moment(App.projectsUI.get("date")).format("L")
    @$().datepicker
      onClose: (date)->
        self.triggerAction(actionContext: date)

Ember.Handlebars.helper('edit-date', App.EditDateView)
