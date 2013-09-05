/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-ember-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    ember_handlebars: {
      compile: {
        options: {
          processName: function (filePath) {
            return filePath.replace(/app\/templates\/(.*)?.hb/, '$1');
          }
        },
        files: {
          'app/templates.js': ['app/templates/**/*.hb']
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'app/app.js': ['app/coffee/**/*.coffee', 'app/js/**/*.js']
        }
      }
    }, /* coffee */
    sass: {
      dist: {
        files: {
          'app/app.css': 'app/sass/app.scss'
        }
      }
    }, /*sass */
    connect: {
      server: {
        options: {
          port: 9000,
          host: '0.0.0.0'
        }
      }
    }, /* connect */
    open: {
      localhost: {
        path: 'http://localhost:5000/'
      }
    },
    watch: {
      html: {
        files: ['index.html', 'app/templates/**/*.hb'],
        tasks: ['ember_handlebars'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      javascript: {
        files: ['app/coffee/**/*.coffee', 'app/js/**/*.js'],
        tasks: ['coffee'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('server', 'Does all the grunt work', function () {
    grunt.task.run([
      'coffee',
      'sass',
      'env',
      'ember_handlebars',
      'connect:server',
      'open:localhost',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['server']);

  grunt.registerTask('heroku', ['coffee', 'sass', 'ember_handlebars']);
};
