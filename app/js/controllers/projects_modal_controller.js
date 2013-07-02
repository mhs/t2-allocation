App.ProjectsModalController = App.ModalController.extend({
	offices: [],
	clients: [],
	create: function() {
		var project = App.Project.createRecord();

		project.on('didCreate', this, function() {
			this.send('close');
		});

		this.set('model',project);
	}
});