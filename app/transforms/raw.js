`import DS from "ember-data";`

RawTransform = DS.Transform.extend
  deserialize: (serialized) ->
    serialized
  serialize: (deserialized) ->
    deserialized

`export default RawTransform;`
