import Ember from 'ember';
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";

let ProjectsController = Ember.ArrayController.extend({
  officeController: Ember.inject.controller('office'),
  // for remembering previously entered values for easier bulk entry
  lastLikelihood: null,
  lastEndDate: null,
  office: Ember.computed.alias('officeController.model')
});


export default ProjectsController;
