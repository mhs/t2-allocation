import DS from "ember-data";

let RawTransform = DS.Transform.extend({
  deserialize(serialized) {
    return serialized;
  },
  serialize(deserialized) {
    return deserialized;
  }
});

export default RawTransform;
