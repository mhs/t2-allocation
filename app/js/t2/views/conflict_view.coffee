App.ConflictView = Ember.View.extend

  attributeBindings: ['style']

  style: (->
    width = @get("conflict.duration") * App.WIDTH_OF_DAY
    offset = @get("startOffset") * App.WIDTH_OF_DAY
    "position: absolute; width: #{width}px; left: #{offset}px; background-color: red;"
  ).property("startOffset", "conflict")

  conflict: (->
    @get("context.content")
  ).property("context.content")

  startOffset: (->
    currentMonday = moment(App.projectsUI.get("date"))
    startDate = moment(App.dateMunge(@get('conflict.startDate')))
    startDate.diff currentMonday, "days"
  ).property("App.projectsUI.date", "conflict.startDate")
