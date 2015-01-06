/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();

app.import('bower_components/moment/moment.js')
app.import('bower_components/jquery-ui/jquery-ui.js')
app.import('bower_components/jquery-ui/themes/redmond/jquery-ui.css')

var extraAssets = pickFiles('bower_components/jquery-ui/themes/redmond/images', {
  srcDir: '/',
  files: ['*.gif', '*.png'],
  destDir: '/assets/images'
});


// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([app.toTree(), extraAssets], {overwrite: true});
