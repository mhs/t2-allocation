App.ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: ENV.API_BASEURL

App.ApplicationSerializer = DS.ActiveModelSerializer.extend()

App.ProjectSerializer = App.ApplicationSerializer.extend
  serializeHasMany: (record, json, relationship) ->
    key = relationship.key
    if key == "offices"
      json[this.keyForRelationship(key, relationship.kind)] = Ember.get(record, key).mapBy('id')
    else
      @_super()

App.RawTransform = DS.Transform.extend
  deserialize: (serialized) ->
    serialized
  serialize: (deserialized) ->
    deserialized

App.DateTransform = DS.Transform.extend
  deserialize: (string) ->
    if !string
      null
    else
      moment(string)

  serialize: (date) ->
    if !date
      return null
    moment(date).format('YYYY-MM-DD')
