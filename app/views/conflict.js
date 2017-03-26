// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import { WIDTH_OF_DAY } from "t2-allocation/utils/constants";

let ConflictView = Ember.View.extend({

  attributeBindings: ['style', 'title'],
  classNames: ['conflict'],

  title: Ember.computed.alias('controller.hint'),
  duration: Ember.computed.alias('controller.duration'),
  startOffset: Ember.computed.alias('controller.startOffset'),
  parentOffset: Ember.computed.alias('parentView.context.startOffset'),

  style: (function() {
    let dateOffset = this.get('startOffset');
    let parentOffset = this.get('parentOffset');
    if (parentOffset > 0) { dateOffset -= parentOffset; }
    let width = this.get("duration") * WIDTH_OF_DAY;
    let offset = dateOffset * WIDTH_OF_DAY;
    return `width: ${width}px; left: ${offset}px;`;
  }).property("parentOffset", "startOffset", "duration")
});

export default ConflictView;
