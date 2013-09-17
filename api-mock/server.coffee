_ = require('underscore')

PORT = 5000
apiServer = require('../spec/acceptance/support/api-server')(PORT)

resources = require('./api/v1/projects.json')
resources.people = require('./api/v1/people.json').people

apiServer.useResources resources

module.exports = apiServer.when
