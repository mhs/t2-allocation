connect = require('connect')
express = require('express')
_ = require('underscore')

PORT = 5000

resources = require('./api/v1/projects.json')
app = express()
  .use(connect.logger('dev'))

  .use (req, res, next)->
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, accept, origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next()

  .get '/api/v1/people.json', (req, res)->
    res.sendfile("#{__dirname}/api/v1/people.json")

  .get '/api/v1/:resources.json', (req, res)->
    resName = req.params.resources
    obj = {}
    obj[resName] = resources[resName]
    res.json obj

  .get '/api/v1/allocations/:id.json', (req, res)->
    res.send _.findWhere(resources.allocations, id: +req.params.id)

module.exports = app
