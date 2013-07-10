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
    // why does this need to be set here?
    controller.set('model', App.Project.find());
    var offices = App.Office.find();
    this.controllerFor('projects.modal').set('offices', offices);
    this.controllerFor('allocations.modal').set('offices', offices);
    this.controllerFor('allocations.modal').set('people', App.Person.find());
    this.controllerFor('allocations.modal').set('projects', App.Project.find());
  }
});


