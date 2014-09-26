`import Ember from "ember";`
`import { WIDTH_OF_DAY } from "t2-allocation/utils/constants";`

ConflictView = Ember.View.extend

  attributeBindings: ['style', 'title']
  classNames: ['conflict']

  title: Ember.computed.alias('controller.hint')
  duration: Ember.computed.alias('controller.duration')
  startOffset: Ember.computed.alias('controller.startOffset')
  parentOffset: Ember.computed.alias('parentView.context.startOffset')

  style: (->
    debugger
    dateOffset = @get('startOffset')
    parentOffset = @get('parentOffset')
    dateOffset -= parentOffset if (parentOffset > 0)
    width = @get("duration") * WIDTH_OF_DAY
    offset = dateOffset * WIDTH_OF_DAY
    "width: #{width}px; left: #{offset}px;"
  ).property("parentOffset", "startOffset", "duration")

`export default ConflictView;`
