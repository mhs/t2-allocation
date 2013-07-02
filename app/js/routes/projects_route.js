App.ProjectsRoute = Ember.Route.extend({
	events: {
    createProject: function() {
      this.controllerFor('projects.modal').create();
      this.send('openModal', 'projects.modal');
    },
    editProject: function(project) {
      this.controllerFor('projects.modal').edit(project);
      this.send('openModal', 'projects.modal');
    },
    createAllocation: function() {
      this.controllerFor('allocations.modal').create();
      this.send('openModal', 'allocations.modal');
    },
    editAllocation: function(allocation) {
      this.controllerFor('allocations.modal').edit(allocation);
      this.send('openModal', 'allocations.modal');
    },
    confirmDelete: function(record) {
      this.controllerFor('confirm.delete').confirmDelete(record, 'projects.index');
      this.send('openModal', 'confirm.delete');
    }
	},
  setupController: function(controller) {
    controller.set('model', App.Project.find());
    this.controllerFor('projects.modal').set('offices', App.Office.find());
    this.controllerFor('projects.modal').set('clients', App.Client.find());
    this.controllerFor('allocations.modal').set('offices', App.Office.find());
    this.controllerFor('allocations.modal').set('people', App.Person.find());
    this.controllerFor('allocations.modal').set('roles', App.Role.find());
    this.controllerFor('allocations.modal').set('projects', App.Project.find());
  }
});


