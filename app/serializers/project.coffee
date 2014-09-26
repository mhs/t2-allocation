`import Ember from "ember";`
`import ApplicationSerializer from "t2-allocation/serializers/application";`
`import DS from "ember-data";`
ProjectSerializer = ApplicationSerializer.extend
  serializeHasMany: (record, json, relationship) ->
    key = relationship.key
    if key == "offices"
      json[this.keyForRelationship(key, relationship.kind)] = Ember.get(record, key).mapBy('id')
    else
      @_super()

`export default ProjectSerializer;`
