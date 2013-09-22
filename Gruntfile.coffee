'use strict'

LIVERELOAD_PORT = 35729
lrSnippet = require('connect-livereload')(port: LIVERELOAD_PORT)

mountFolder = (connect, dir) ->
  connect.static(require('path').resolve(dir))

loadEnv = (environment) ->
  extend = require('util')._extend
  config = require('./config.json')

  env = {}
  extend(env, config.default)
  extend(env, config[environment])
  env

module.exports = (grunt)->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  t2Config =
    app: 'app'
    dist: 'dist'

  grunt.initConfig
    t2Config: t2Config
    replace:
      dist:
        options:
          prefix: '@@'
        files: [
          cwd: '.tmp'
          expand: true
          src: ['**/*.{js,html}']
          dest: '.tmp/'
        ]
    ember_handlebars:
      compile:
        options:
          processName: (filePath) ->
            filePath.replace(/app\/templates\/(.*)?.hb/, '$1')
        files:
          '.tmp/scripts/templates.js': ['app/templates/**/*.hb']
    coffee:
      dist:
        files:
          '.tmp/scripts/app.js': ['app/scripts/**/*.coffee']
    sass:
      dist:
        files:
          '.tmp/styles/app.css': 'app/sass/app.scss'
    connect:
      options:
        port: 9000
        host: '0.0.0.0'
      livereload:
        options:
          middleware: (connect) ->
            [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, t2Config.app)
            ]
      dist:
        options:
          port: 9001
          middleware: (connect) ->
            [
              mountFolder(connect, t2Config.dist)
            ]
    open:
      localhost:
        path: 'http://localhost:<%= connect.options.port %>/'
      dist:
        path: 'http://localhost:<%= connect.dist.options.port %>/'
    clean:
      dist:
        files: [
          dot: true
          src: [
            '.tmp',
            '<%= t2Config.dist %>/*',
            '!<%= t2Config.dist %>/.git*'
          ]
        ]
      server: '.tmp'
    copy:
      dist:
        files: [
          expand: true
          dot: true
          cwd: '<%= t2Config.app %>'
          dest: '<%= t2Config.dist %>'
          src: [
            '*.{ico,png,txt}'
            'img/{,*/}*.{gif,png}'
            'styles/fonts/*'
          ]
        ,
          expand: true
          dest: '<%= t2Config.dist %>'
          src: [ 'index.js', 'procfile' ]
        ,
          expand: true
          dot: true
          cwd: '<%= t2Config.app %>/bower_components/jquery-ui/themes/base/images'
          dest: '<%= t2Config.dist %>/styles/images'
          src: [
            '*.{gif,png}'
          ]
        ]
    concurrent:
      dist: [
          'coffee:dist'
          'ember_handlebars'
          'sass'
        ]
      server: [
          'coffee:dist'
          'ember_handlebars'
          'sass'
        ]

    htmlmin:
      dist:
        options: {}
          #removeCommentsFromCDATA: true
          ## https://github.com/yeoman/grunt-usemin/issues/44
          ##collapseWhitespace: true
          #collapseBooleanAttributes: true
          #removeAttributeQuotes: true
          #removeRedundantAttributes: true
          #useShortDoctype: true
          #removeEmptyAttributes: true
          #removeOptionalTags: true
        files: [
            expand: true
            cwd: '<%= t2Config.app %>'
            src: ['*.html']
            dest: '<%= t2Config.dist %>'
        ]

    useminPrepare:
      html: '<%= t2Config.app %>/index.html'
      options:
        dest: '<%= t2Config.dist %>'
    usemin:
      html: ['<%= t2Config.dist %>/{,*/}*.html']
      css: ['<%= t2Config.dist %>/styles/{,*/}*.css']
      options:
        dirs: ['<%= t2Config.dist %>']
    rev:
      dist:
        files:
          src: [
            '<%= t2Config.dist %>/scripts/{,*/}*.js',
            '<%= t2Config.dist %>/styles/{,*/}*.css',
            '<%= t2Config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= t2Config.dist %>/styles/fonts/*'
          ]

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
        files: ['app/scripts/**/*.coffee', 'app/js/**/*.js']
        tasks: ['coffee', 'set-environment', 'replace']
        options:
          livereload: true
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
    karma:
      options:
        configFile: 'karma.conf.coffee'
      unit:
        singleRun: true
        browsers: ['PhantomJS']
      dev:
        browsers: ['Chrome']


  grunt.registerTask 'server', (target) ->
    if target == 'dist'
      grunt.task.run([
        'build',
        'open:dist',
        'connect:dist:keepalive'
      ])
    else
      grunt.task.run [
        'set-environment',
        'clean:server',
        'concurrent:server',
        'replace',
        'connect:livereload',
        'open:localhost',
        'watch'
      ]

  grunt.registerTask 'environment', (target) ->
    grunt.log.writeln("Loading environment: #{target}")
    _env = loadEnv(target)
    _patterns = []
    for k, v of _env
      _patterns.push match: k, replacement: v
    grunt.config.set('replace.dist.options.patterns', _patterns)

  grunt.registerTask 'set-environment', () ->
    env = process.env.T2_ENV or 'development'
    env = 'production' if grunt.option('production')
    env = 'test'       if grunt.option('test')
    grunt.task.run ["environment:#{env}"]

  grunt.registerTask 'build', [
    'set-environment',
    'clean:dist',
    'concurrent:dist',
    'replace',
    'useminPrepare',
    'htmlmin',
    'concat',
    'copy',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]


  grunt.registerTask 'test:unit', ['karma:unit']

  grunt.registerTask 'test:dev', ['karma:dev']

  grunt.registerTask 'test:acceptance', ()->
    grunt.option('test', true)
    process.env['TEST_APP_PORT'] = grunt.config.get('connect.dist.options.port')
    grunt.config.set('jasmine-node.run.spec', 'spec/acceptance')
    grunt.task.run([
      'build'
      'connect:dist'
      'jasmine-node'
    ])

  grunt.registerTask('test', ['test:unit', 'test:acceptance'])

  grunt.registerTask 'apiMock', ['express', 'express-keepalive']

  grunt.registerTask('default', ['server'])
