import Ember from 'ember';
let ProjectsController = Ember.Controller.extend({
  officeController: Ember.inject.controller('office'),
  // for remembering previously entered values for easier bulk entry
  lastLikelihood: null,
  lastEndDate: null,
  office: Ember.computed.alias('officeController.model'),
  projectSort: ['sortOrder', 'name'],
  sortedProjects: Ember.computed.sort('model', 'projectSort')
});


export default ProjectsController;
