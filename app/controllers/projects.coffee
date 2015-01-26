`import DS from "ember-data";`

ProjectsController = Ember.ArrayController.extend

  # for remembering previously entered values for easier bulk entry
  lastLikelihood: null
  lastEndDate: null


`export default ProjectsController;`
