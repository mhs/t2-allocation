App.ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: ENV.API_BASEURL

App.ApplicationSerializer = DS.ActiveModelSerializer.extend()

App.AllocationSerializer = App.ApplicationSerializer.extend
  normalize: (type, hash) ->
    debugger
    @_super(type, hash)
  serialize: (record, options) ->
    json = @_super(record, options)
    json.window_start_date = App.projectsUI.get('startDate')
    json.window_end_date = App.projectsUI.get('endDate')
    json


App.AvailabilitySerializer = App.ApplicationSerializer.extend
  extractArray:  (store, type, payload, requestType) ->
    payload.availabilities.forEach (item) ->
      item.id = item.start_date + item.end_date + item.person_id
    @_super(store, type, payload, requestType)

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
