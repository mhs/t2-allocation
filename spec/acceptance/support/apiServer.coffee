_ = require('underscore')

createApiServer = (port)->
  resources = {}

  server = require('./webserver')(port)

  server.when.get '/api/v1/:resources.json', (req, res)->
    resName = req.params.resources
    obj = {}
    obj[resName] = resources[resName]
    res.json obj

  server.when.get '/api/v1/:resources/:id.json', (req, res)->
    resName = req.params.resources
    res.json _.findWhere(resources[resName], id: +req.params.id)

  server.when.post '/api/v1/:resources.json', (req, res)->
    resName = req.params.resources
    _resources = resources[resName]

    maxId = _.max(_resources, (r)-> r.id)

    resource = req.body
    resource.id = maxId + 1

    _resources.push resource

    res.send(201)

  server.when.put '/api/v1/:resources/:id.json', (req, res)->
    resName = req.params.resources
    resource = _.findWhere(resources[resName], id: +req.params.id)
    updates = req.body
    for k,v of updates
      resource[k] = v
    res.json resource

  server.useResources = (_resources)->
    resources = _resources

  server.loadResources = (dir)->
    fs = require('fs')
    dir = require('path').resolve(dir)
    known_resources = ['allocations', 'people', 'projects', 'offices', 'slots']
    resources = known_resources.reduce (resources, name)->
      fixturePath = "#{dir}/#{name}.json"

      json = JSON.parse(fs.readFileSync(fixturePath))

      resources[name] = json[name]
      resources
    , {}
    resources

  server
module.exports = createApiServer
