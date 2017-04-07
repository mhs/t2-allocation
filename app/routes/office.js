// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let OfficeRoute = Ember.Route.extend({
  model(params) {
    let offices = this.store.peekAll('allocationBundle').get('firstObject.offices');
    return offices.findBy('slug', params.slug);
  },

  serialize(model) {
    return {slug: model.get('slug')};
  },

  actions: {
    createProject() {
      return this.send('editProject', this.store.createRecord('project'));
    },

    editProject(project) {
      this.controllerFor("modal").set("availableOffices", this.controllerFor('office').get('allActive'));
      this.controllerFor("modal").edit(project);
      return this.send("openModal", "modal");
    }
  }
});

export default OfficeRoute;
