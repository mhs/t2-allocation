'use strict'

module.exports = (grunt)->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig
    ember_handlebars:
      compile:
        options:
          processName: (filePath) ->
            filePath.replace(/app\/templates\/(.*)?.hb/, '$1')
        files:
          'app/templates.js': ['app/templates/**/*.hb']
    coffee:
      compile:
        files:
          'app/app.js': ['app/coffee/**/*.coffee', 'app/js/**/*.js']
      test:
        files: [
          expand: true
          cwd: 'spec'
          src: '**/*.coffee'
          dest: '.tmp/spec'
          ext: '.js'
        ]
    sass:
      dist:
        files:
          'app/app.css': 'app/sass/app.scss'
    connect:
      server:
        options:
          port: 9000
          host: '0.0.0.0'
    open:
      localhost:
        path: 'http://localhost:<%= connect.server.options.port %>/'
    watch:
      html:
        files: ['index.html', 'app/templates/**/*.hb']
        tasks: ['ember_handlebars']
        options:
          livereload: true
      sass:
        files: ['app/sass/**/*.scss']
        tasks: ['sass']
        options:
          livereload: true
      javascript:
        files: ['app/coffee/**/*.coffee', 'app/js/**/*.js']
        tasks: ['coffee']
        options:
          livereload: true
      test:
        files: ['spec/**/*.coffee']
        tasks: ['coffee:test']
    'jasmine-node':
      options:
        coffee: true
        captureExceptions: true
      run:
        spec: 'spec'
      executable: './node_modules/.bin/jasmine-node'
    express:
      api:
        options:
          port: 5000
          server: './api-mock/server'

  grunt.registerTask 'server', 'Does all the grunt work', ()->
    grunt.task.run [
      'coffee'
      'sass'
      'ember_handlebars'
      'connect:server'
      'open:localhost'
      'watch'
    ]

  grunt.registerTask 'test:acceptance', ()->
    grunt.config.set('jasmine-node.run.spec', 'spec/acceptance')
    grunt.task.run(['jasmine-node'])

  grunt.registerTask('test', ['test:acceptance'])

  grunt.registerTask 'apiMock', ['express', 'express-keepalive']

  grunt.registerTask('default', ['server'])
