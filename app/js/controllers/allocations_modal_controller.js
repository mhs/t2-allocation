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
	}
});