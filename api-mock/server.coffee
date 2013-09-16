connect = require('connect')
express = require('express')
_ = require('underscore')

PORT = 5000

resources = require('./api/v1/projects.json')
resources.people = require('./api/v1/people.json').people
app = express()
  .use(connect.logger('dev'))
  .use(express.bodyParser())

  .use (req, res, next)->
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Accept, Origin, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
    next()

  .get '/api/v1/:resources.json', (req, res)->
    resName = req.params.resources
    obj = {}
    obj[resName] = resources[resName]
    res.json obj

  .get '/api/v1/allocations/:id.json', (req, res)->
    res.send _.findWhere(resources.allocations, id: +req.params.id)

  .get '/api/v1/people/:id.json', (req, res)->
    person = _.findWhere(resources.people, id: +req.params.id)
    console.log req.params
    res.send person

  .put '/api/v1/allocations/:id.json', (req, res)->
    allocation = _.findWhere(resources.allocations, id: +req.params.id)
    updatedAllocation = req.body
    for k,v of updatedAllocation
      allocation[k] = v
    res.send allocation

module.exports = app
