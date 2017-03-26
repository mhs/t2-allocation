import Ember from "ember";

let AllocationBoxModel = Ember.ObjectProxy.extend({
  //externally set props
  currentOffice: null,
  allocation: null,

  //internal props

  isPartial: Ember.computed.lt('content.percentAllocated', 100),
  isExternal: Ember.computed('currentOffice', 'content.person.office', function() {
    let office = this.get('content.person.office');
    return office && (office !== this.get('currentOffice'));
  }),
  identifier: Ember.computed.any('content.person.name','content.role'),
  index: Ember.computed.alias('content.track'),

  hint: (function() {
    let _external = this.get('isExternal') ? ` (${this.get('content.person.office.name')})` : '';
    return `${this.get('content.person.name')}${_external}`;
  }).property('content.person.office.name', 'isExternal', 'content.person.name')
});

export default AllocationBoxModel;
