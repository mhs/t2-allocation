import Ember from "ember";

let OfficeRoute = Ember.Route.extend({
  model(params) {
    let offices = this.store.all('allocationBundle').get('firstObject.offices');
    return offices.findProperty('slug', params.slug);
  },

  serialize(model) {
    return {slug: model.get('slug')};
  },

  actions: {
    createProject() {
      return this.send('editProject', this.store.createRecord('project'));
    },

    editProject(project) {
      this.controllerFor("projects-modal").set("availableOffices", this.controllerFor('office').get('allActive'));
      this.controllerFor("projects-modal").edit(project);
      return this.send("openModal", "projects-modal");
    }
  }
});

export default OfficeRoute;
