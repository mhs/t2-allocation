App.AllocationsModalController = App.ModalController.extend({
	offices: [],
	people: [],
	projects: [],
	create: function() {
		var allocation = App.Allocation.createRecord();

		allocation.on('didCreate', this, function() {
			this.send('close');
		});

		this.set('model',allocation);
	}
});
