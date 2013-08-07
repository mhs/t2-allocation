/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'js/app.js': ['app/coffee/**/*.coffee', 'app/js/**/*.js']
        }
      }
    }, /* coffee */
    sass: {
      dist: {
        files: {
          'css/app.css': 'app/sass/app.scss'
        }
      }
    }, /*sass */
    connect: {
      server: {
        options: {
          port: 9000,
          host: '0.0.0.0',
          middleware: function (connect, options) {
            return [
              function (req, res, next) {
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "*");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                res.setHeader("Access-Control-Max-Age", "604800");
                next();
              },
              connect.static(__dirname)
            ];
          }
        }
      }
    }, /* connect */
    watch: {
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
      'connect:server',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['server']);
};
