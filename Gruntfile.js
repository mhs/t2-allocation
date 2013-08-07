/*global module:false*/
module.exports = function(grunt) {
  //require(process.env['LINEMAN_MAIN']).config.grunt.run(grunt);

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
          host: '0.0.0.0'
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
