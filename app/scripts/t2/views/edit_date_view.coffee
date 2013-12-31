App.EditDateView = Ember.TextField.extend
  didInsertElement: ->
    @$().focus()

  focusIn: (event) ->
    self = @
    @set "value", moment(App.projectsUI.get("date")).format("YYYY-MM-DD")
    @$().datepicker
      dateFormat: "yy-mm-dd"
      onClose: (date)->
        self.triggerAction(actionContext: date)

Ember.Handlebars.helper('edit-date', App.EditDateView)
