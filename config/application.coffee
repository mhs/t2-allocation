###
Exports an object that defines
 all of the configuration needed by the projects'
 depended-on grunt tasks.

You can find the parent object in: node_modules/lineman/config/application.js
###

module.exports = require(process.env['LINEMAN_MAIN']).config.extend 'application',
  # Override application configuration here. Common examples follow in the comments.

  #  API Proxying
  #
  #  During development, you'll likely want to make XHR (AJAX) requests to an API on the same
  #  port as your lineman development server. By enabling the API proxy and setting the port, all
  #  requests for paths that don't match a static asset in ./generated will be forwarded to
  #  whatever service might be running on the specified port.
  #
  #  server: {
  #    apiProxy: {
  #      enabled: true,
  #      host: 'localhost',
  #      port: 3000
  #    }
  #  }

  enableSass: true

  prependTasks:
    common: ["ember_handlebars", "env"]

  removeTasks:
    common: "handlebars"

  loadNpmTasks: ['grunt-ember-handlebars']

  ember_handlebars:
    options:
      processName: (name) -> name.match(/app\/templates\/([^.]*)/)[1]
    compile:
      files:
        "generated/template/handlebars.js": "<%= files.template.handlebars %>"

  uglify:
    options:
      beautify:
        ascii_only: true

  env:
    config:
      ENV:          process.env['APP_ENV']      || "dev"
      UA:           process.env['UA']           || "UA-XXXXXXXX-Y",
      DOMAIN:       process.env['DOMAIN']       || "example.com",
      SIGN_IN_URL:  process.env['SIGN_IN_URL']  || "http://localhost:5000/sign_in",
      SIGN_OUT_URL: process.env['SIGN_OUT_URL'] || "http://localhost:5000/sign_out",
      PEOPLE_URL:   process.env['PEOPLE_URL']   || "http://localhost:9999/#/people/",
      API_BASEURL:  process.env['API_BASEURL']  || "http://localhost:5000/api/v1",
      NAVBAR_URL:   process.env['NAVBAR_URL']   || "http://localhost:5000/api/v1/navbar",

  images:
    dist:
      files: [ # vendor first, so 'app' wins any collisions
        { expand: true, cwd: "vendor/", src: "img/**/*.*", dest: "dist/css/" }
        { expand: true, cwd: "app/",    src: "img/**/*.*", dest: "dist/css/" }
      ]

  watch:
    handlebars:
      tasks: ["ember_handlebars:compile"]

  server:
    web:
      port: 9000
