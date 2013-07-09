App.ProjectsModalController = App.ModalController.extend({
	offices: [],
	create: function() {
		var project = App.Project.createRecord();

		project.on('didCreate', this, function() {
			this.send('close');
		});

		this.set('model',project);
	}
});
