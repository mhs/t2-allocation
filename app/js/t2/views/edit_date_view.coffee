App.EditDateView = Ember.TextField.extend(
  classNames: ["edit"]
  insertNewline: ->
    @get("controller").confirmDate event.target.value

  change: (event) ->
    @get("controller").confirmDate event.target.value  if @value isnt ""

  didInsertElement: ->
    @$().focus()

  focusIn: (event) ->
    @set "value", moment(App.projectsUI.get("date")).format("L")
    $(event.target).datepicker()
)
