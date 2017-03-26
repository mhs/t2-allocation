// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import DS from "ember-data";

let ProjectsController = Ember.ArrayController.extend({
  needs: ['office'],
  // for remembering previously entered values for easier bulk entry
  lastLikelihood: null,
  lastEndDate: null,
  office: Ember.computed.alias('controllers.office.model')
});


export default ProjectsController;
