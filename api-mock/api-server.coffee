_ = require('underscore')

resourceNameMap =
  people: 'person'
  allocations: 'allocation'
  projects: 'project'
  offices: 'office'
  slots: 'slot'

createApiServer = (port)->
  resources = {}

  updateRelations = (action, resourceName, resource)->
    switch resourceName
      when 'allocation'
        switch action
          when 'create'
            _project = _.findWhere resources.projects, id: resource.project_id
            _project.allocation_ids.push resource.id

      when 'project'
        switch action
          when 'create'
            _offices = _.filter resources.offices, (o)->
              _.contains resource.office_ids, o.id

            _.each _offices, (o)->
              o.project_ids.push resource.id

          when 'delete'
            _offices = _.filter resources.offices, (office)->
              _.contains(office.project_ids, resource.id)

            _.each _offices, (o)->
              o.project_ids = _.reject o.project_ids, (id)->
                id == resource.id


  server = require('./webserver')(port)

  server.when.get '/api/v1/:resources.json', (req, res)->
    resName = req.params.resources
    obj = {}
    obj[resName] = resources[resName]
    res.json obj

  server.when.get '/api/v1/:resources/:id.json', (req, res)->
    resourcesName = req.params.resources
    resourceName = resourceNameMap[resourcesName]

    _response = {}
    _response[resourceName] = _.findWhere(resources[resourcesName], id: +req.params.id)

    res.json _response

  server.when.post '/api/v1/:resources.json', (req, res)->
    resourcesName = req.params.resources
    resourceName = resourceNameMap[resourcesName]

    _resources = resources[resourcesName]

    maxId = _.max(_resources, (r)-> r.id).id

    resource = req.body[resourceName]
    resource.id = maxId + 1

    _resources.push resource

    updateRelations('create', resourceName, resource)

    _response = {}
    _response[resourceName] = resource

    res.status(201).send(_response)

  server.when.put '/api/v1/:resources/:id.json', (req, res)->
    resourcesName = req.params.resources
    resourceName = resourceNameMap[resourcesName]

    resource = _.findWhere(resources[resourcesName], id: +req.params.id)

    updates = req.body[resourceName]
    for k,v of updates
      resource[k] = v

    _response = {}
    _response[resourceName] = resource

    res.json _response

  server.when.delete '/api/v1/:resources/:id.json', (req, res)->
    resourcesName = req.params.resources
    resourceName = resourceNameMap[resourcesName]

    _resources = resources[resourcesName]

    resource = null
    resources[resourcesName] = _.reject _resources, (r)->
      if r.id == +req.params.id
        resource = r
        true

    updateRelations('delete', resourceName, resource)

    res.json null

  server.useResources = (_resources)->
    resources = _resources

  server.loadResources = (dir)->
    fs = require('fs')
    dir = require('path').resolve(dir)
    known_resources = ['allocations', 'people', 'projects', 'offices', 'slots', 'navbar']
    resources = known_resources.reduce (resources, name)->
      fixturePath = "#{dir}/#{name}.json"

      json = JSON.parse(fs.readFileSync(fixturePath))

      resources[name] = json[name]
      resources
    , {}
    resources

  server
module.exports = createApiServer
