module.exports = function(grunt) {
  grunt.registerMultiTask("env", "load enviroment variables", function() {
    var path = "generated/js/env.js";
    var util = require('util');
    console.log(util.inspect(this.data));
    grunt.file.write(path, getENV(this.data));
  });

  function getENV(data) {
    return "window.ENV=" + JSON.stringify(data) + ";\n";
  };
};

