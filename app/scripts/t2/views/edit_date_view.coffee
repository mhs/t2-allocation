App.EditDateView = Ember.TextField.extend
  didInsertElement: ->
    @$().focus()

  focusIn: (event) ->
    self = @
    @set "value", moment(App.projectsUI.get("date")).format("L")
    @$().datepicker
      onClose: (date)->
        closestMonday = moment(date).startOf("week").add('d', 1)
        self.triggerAction(actionContext: closestMonday)

Ember.Handlebars.helper('edit-date', App.EditDateView)
