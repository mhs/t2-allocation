import DS from "ember-data";

let ProjectsController = Ember.ArrayController.extend({

  // for remembering previously entered values for easier bulk entry
  lastLikelihood: null,
  lastEndDate: null
});


export default ProjectsController;
