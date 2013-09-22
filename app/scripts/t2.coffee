#
# This function fixes the issue when we create allocation and the end date
# property is cleared after we click Save.
#
# See below url for the fix (will wait for official release to patch this)
# https://github.com/ebryn/ember-model/commit/c11d3bd302547d6d1fa30efb5dec0b1ddfc0fca7
#
__hackEmberModel = window.__hackEmberModel = ->
  return if __hackEmberModel.__hacked

  save_didCreateRecord = Ember.Model.prototype.didCreateRecord
  if save_didCreateRecord?
    __hackEmberModel.__hacked = true
    console.log('applying Ember.Model hack!')

    Ember.Model.prototype.didCreateRecord = ->
      set(this, '_dirtyAttributes', []);
      save_didCreateRecord.call(@)

window.App = Ember.Application.create()

window.App.API_BASEURL = "@@API_BASEURL"
