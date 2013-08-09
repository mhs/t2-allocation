unless window.T2Application
  window.T2Application = Em.Application.extend(Ember.Evented,
    setup: ->
      api_extension = "http://localhost:5000/api/v1/"

      modelClasses = [App.Allocation, App.Office, App.Person, App.Project, App.Slot]
      modelClasses.forEach (klass) ->
        parts = klass.toString().split('.')
        name = parts[parts.length - 1].replace(/([A-Z])/g, '_$1').toLowerCase().slice(1)
        unless name == "person"
          pluralName = name + "s"
        else
          pluralName = "people"

        klass.collectionKey = pluralName
        klass.rootKey = name
        klass.url = api_extension + pluralName
        klass.camelizeKeys = true

        klass.adapter = Ember.RESTAdapter.extend(
          findMany: (klass, records, ids) ->
            console.log "findMany", klass + "", records + "", ids

          mappings:
            allocation: App.Allocation
            allocations: App.Allocation
            office: App.Office
            offices: App.Office
            person: App.Person
            people: App.Person
            client_principal: App.Person
            projects: App.Project
            project: App.Project
            slots: App.Slot
            slot: App.Slot

          didFind: (record, id, data) ->
            @sideload(record.constructor, data)
            @_super(record, id, data)

          didFindAll: (klass, records, data) ->
            @sideload(klass, data)
            @_super(klass, records, data)

          didFindQuery: (klass, records, params, data) ->
            @sideload(klass, data)
            @_super(klass, records, params, data)

          didCreateRecord: (record, data) ->
            @sideload(record.constructor, data)
            @_super(record, data)

          didSaveRecord: (record, data) ->
            @sideload(record.constructor, data)
            @_super(record, data)

          didDeleteRecord: (record, data) ->
            @sideload(record.constructor, data)
            @_super(record, data)

          sideload: (klass, data) ->
            for name, records of data
              records = [records] unless Ember.isArray(records)

              # we need to skip records of type, which is loaded by adapter already
              if (type = @mappings[name]) != klass
                for record in records
                  type.findFromCacheOrLoad(record)
        ).create()

      App.Allocation.url = api_extension + "/allocations"
      App.Office.url = api_extension + "/offices"
      App.Person.url = api_extension + "/people"
      App.Project.url = api_extension + "/projects"
      App.Slot.url = api_extension + "/slots"
    )

window.App = window.T2Application.create()
