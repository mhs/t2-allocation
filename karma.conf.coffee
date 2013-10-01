# Karma configuration
# Generated on Wed Sep 18 2013 14:03:49 GMT+0800 (SGT)

module.exports = (config)->
  config.set

    # base path, that will be used to resolve files and exclude
    basePath: ''


    # frameworks to use
    frameworks: ['jasmine']


    # list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/jquery.min.js'
      'app/bower_components/momentjs/moment.js'
      'app/bower_components/handlebars/handlebars.js'
      'app/bower_components/ember/ember.js'
      'app/bower_components/ember-model/ember-model.js'
      'app/scripts/**/*.coffee'
      'spec/spec_helper.coffee'
      'spec/**/*.coffee'
    ]


    # list of files to exclude
    exclude: [
      'spec/acceptance/**'
    ]


    # test results reporter to use
    # possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress']


    # web server port
    port: 9876


    # enable / disable colors in the output (reporters and logs)
    colors: true


    # level of logging
    # possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO


    # enable / disable watching file and executing tests whenever any file changes
    autoWatch: true


    # Start these browsers, currently available:
    # - Chrome
    # - ChromeCanary
    # - Firefox
    # - Opera
    # - Safari (only Mac)
    # - PhantomJS
    # - IE (only Windows)
    browsers: ['Chrome']


    # If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000


    # Continuous Integration mode
    # if true, it capture browsers, run tests and exit
    singleRun: false

    coffeePreprocessor:
      options:
        bare: false

    preporcessors:
      '**/*.coffee': ['coffee']