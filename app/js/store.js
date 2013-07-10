// http://emberjs.com/guides/models/defining-a-store/

App.Store = DS.Store.extend({
});

DS.RESTAdapter.configure("plurals", {
  person: "people"
});

DS.RESTAdapter.reopen({
  namespace: 'api/v1'
});
