App.ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: App.API_BASEURL

App.ApplicationSerializer = DS.ActiveModelSerializer.extend()

App.PersonAdapter = App.ApplicationAdapter.extend
  ajaxOptions: (url, type, hash) ->
    # return contentType: false + needed options
    # hang on to the data since super will try to stringify it
    if hash?.data?.formData?
      savedData = hash.data.formData
      hash.data = {}
      result = @_super(url, type, hash)
      result.contentType = false
      result.processData = false
      result.data = savedData
      result
    else
      @_super(url, type, hash)

App.PersonSerializer = App.ApplicationSerializer.extend
  serializeIntoHash: (data, type, record) ->
    # return the FormData from record
    data.formData = record.formData(@serialize(record))

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
      [y, m, d] = string.split('-')
      new Date(y, m - 1, d)

  serialize: (date) ->
    if !date
      return null
    moment(date).format('YYYY-MM-DD')
