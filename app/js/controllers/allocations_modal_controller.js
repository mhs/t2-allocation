App.AllocationsModalController = App.ModalController.extend({
	offices: [],
	people: [],
	roles: [],
	projects: [],
	create: function() {
		var allocation = App.Allocation.createRecord();

		allocation.on('didCreate', this, function() {
			this.send('close');
		});

		this.set('model',allocation);
	},
	selectedProject: null,
	updateProject: function () {
		debugger;
		var model = this.get('model');
		if( model && 
			model.get('project') && 
			model.get('project').get('allocations') &&
			!model.get('project').get('allocations').toArray().contains(model) ) {
			debugger;
			this.get('model').get('project').get('allocations').pushObject(this.get('model'));
		}
	}.observes('model.project')
});