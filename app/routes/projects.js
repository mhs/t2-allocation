// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
let ProjectsRoute = Ember.Route.extend({
  model() {
    let office = this.modelFor('office');
    let projects = office.get('projects');
    let bundle = this.modelFor('bundle').get('firstObject');
    if (!projects.findBy('dummyProject', true)) {
      let dummyProject = this.store.createRecord('project', {dummyProject: true, sortOrder: -1});
      projects.pushObject(dummyProject);
    }
    if (!projects.findBy('name', 'Available')) {
      let availableProject = this.store.createRecord('project', {
        people: office.get('people'),
        office,
        name: "Available",
        availableProject: true,
        sortOrder: 4,
        bundle
      }
      );
      projects.pushObject(availableProject);
    }
    return projects;
  }
});

export default ProjectsRoute;
