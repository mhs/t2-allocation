App.defineModel = (collectionKey, rootKey, definition)->
  _Model = Ember.Model.extend definition

  _Model.url = "#{App.API_BASEURL}/#{collectionKey}"
  _Model.collectionKey = collectionKey
  _Model.rootKey = rootKey
  _Model.adapter = Ember.RESTAdapter.create();
  _Model.camelizeKeys = true

  _Model
