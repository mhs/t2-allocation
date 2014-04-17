App.ConflictView = Ember.View.extend

  attributeBindings: ['style', 'title']
  classNames: ['conflict']

  title: Ember.computed.alias('controller.hint')
  duration: Ember.computed.alias('controller.duration')
  startOffset: Ember.computed.alias('controller.startOffset')
  parentOffset: Ember.computed.alias('parentView.context.startOffset')

  style: (->
    dateOffset = @get('startOffset')
    parentOffset = @get('parentOffset')
    dateOffset -= parentOffset if (parentOffset > 0)
    width = @get("duration") * App.WIDTH_OF_DAY
    offset = dateOffset * App.WIDTH_OF_DAY
    "width: #{width}px; left: #{offset}px;"
  ).property("parentOffset", "startOffset", "duration")

