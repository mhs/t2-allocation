'use strict'

connect = require('connect')
express = require('express')

createWebServer = (port)->
  app = express()
    #.use(connect.logger('dev'))
    .use(express.bodyParser())
    .use (req, res, next)->
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Accept, Origin, Content-Type');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
      next()
  conn = null

  result =
    serveDir: (dir)->
      app.use(connect.static(require('path').resolve(dir)))
      @

    when: app

    start: ->
      conn = app.listen port

    stop: ->
      conn.close ->
        conn = null

module.exports = createWebServer
