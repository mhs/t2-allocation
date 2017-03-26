// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ApplicationSerializer from "t2-allocation/serializers/application";
import DS from "ember-data";
let ProjectSerializer = ApplicationSerializer.extend({
  serializeHasMany(record, json, relationship) {
    let { key } = relationship;
    if (key === "offices") {
      return json[this.keyForRelationship(key, relationship.kind)] = Ember.get(record, key).mapBy('id');
    } else {
      return this._super();
    }
  }
});

export default ProjectSerializer;
