PORT = 5000
apiServer = require('./api-server')(PORT)

apiServer.when.get '/sign_in', (req, res)->
  return_url = req.query.return_url
  params = '?authentication_token=abc'
  res.redirect(return_url + params)

resources = require('./api/v1/projects.json')
resources.people = require('./api/v1/people.json').people

apiServer.useResources resources
#apiServer.loadResources(__dirname + '/../spec/acceptance/fixtures')

module.exports = apiServer.when
