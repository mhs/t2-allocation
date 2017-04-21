import T2Modal from 't2-allocation/components/t2-modal';

export default T2Modal.extend({
  actions: {
    edit() {
      return this.get('allocationModal').editAllocation(this.get('model'));
    }
  },

  person: Ember.computed.reads('model.person'),
  project: Ember.computed.reads('model.project'),
  startDate: Ember.computed('model.startDate', function() {
    return moment(this.get('model.startDate')).format('MMM DD');
  }),

  endDate: Ember.computed('model.endDate', function() {
    return moment(this.get('model.endDate')).format('MMM DD');
  })
});
