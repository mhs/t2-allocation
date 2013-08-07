/*global module:false*/
module.exports = function(grunt) {
  //require(process.env['LINEMAN_MAIN']).config.grunt.run(grunt);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          host: '0.0.0.0'
        }
      }
    }
  });

  grunt.registerTask('server', 'Does all the grunt work', function () {
    grunt.task.run(['connect:server']);
  });

  grunt.registerTask('default', ['server']);
};
