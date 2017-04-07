// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ModalController from "t2-allocation/controllers/modal";
import FormDateRangeMixin from "t2-allocation/mixins/form-date-range";

let EDITABLE_PROPERTIES = [
  'billable',
  'binding',
  'endDate',
  'notes',
  'project',
  'person',
  'startDate',
  'percentAllocated',
  'likelihood',
  'role'
];



const ROLES = [ {name: 'Principal', id: 'role:principal', group: 'Roles'},
          {name: 'Product Manager', id: 'role:product_manager', group: 'Roles'},
          {name: 'Engineer', id: 'role:developer', group: 'Roles'},
          {name: 'Designer', id: 'role:designer', group: 'Roles'}];


let editableProps = EDITABLE_PROPERTIES.reduce(function(props, name){
  props[name] = null;
  return props;
}
, {});

let AllocationsModalController = ModalController.extend(editableProps, FormDateRangeMixin);

AllocationsModalController.reopen({
  needs: ['office', 'projects'],
  currentOffice: Ember.computed.alias('controllers.office.model'),


  _initialProject: null,

  personOrRoleSelection: null,

  people: Ember.computed('project', function() {
    return this.get('project.activePeople') || [];
  }),

  peopleAndRoles: Ember.computed('project', function() {
    let peopleAndRoles = Ember.ArrayProxy.create({content: []});
    peopleAndRoles.pushObjects(Em.A(ROLES));
    peopleAndRoles.pushObjects(this.get('people').map(person => ({ name: person.get('name'), id: person.get('id'), person, group: 'People' }))
    );
    return peopleAndRoles;
  }),

  percentAllocatedObserver: Ember.observer('personOrRoleSelection', 'project', function() {
    let pct = this.get('person.percentBillable');
    if (this.get('isNew')) {
      if (this.get('project.vacation')) {
        return this.set('percentAllocated', '100');
      } else {
        return this.set('percentAllocated', pct || "100");
      }
    }
  }),

  projectSort: ['sortOrder:asc', 'name:asc'],
  projects: Ember.computed.filter('sortedProjects', item => item.get('name') !== 'Available'),
  sortedProjects: Ember.computed.sort('currentOffice.projects', 'projectSort'),

  errors: Ember.computed('_editedModel.errors.[]', function() {
    let errors = Ember.Object.create();
    this.get('_editedModel.errors').forEach(error=> errors.set(error.attribute, error.message));
    return errors;
  }),

  isNew: Ember.computed.alias('_editedModel.isNew'),

  likelihoodOptions: ['100% Booked', '90% Likely', '60% Likely', '30% Likely'],

  getPersonOrRole(allocation) {
    return this.get('peopleAndRoles').find(personOrRole => {
      return (allocation.get('person.content.id') === personOrRole.id) || (allocation.get('role') === personOrRole.name);
    }
    );
  },

  setPersonOrRole(allocation) {
    let selected = this.get('personOrRoleSelection');
    if (selected.group === 'People') {
      allocation.set('person', selected.person);
      return allocation.set('role', null);
    } else {
      allocation.set('person', null);
      return allocation.set('role', selected.name);
    }
  },

  _initForm(allocation){
    this.set('project', null);
    for (let n of Array.from(EDITABLE_PROPERTIES)) {
      this.set(n, allocation.get(n));
    }
    return this.set('personOrRoleSelection', this.getPersonOrRole(allocation));
  },

  _applyChanges(allocation){
    for (let n of Array.from(EDITABLE_PROPERTIES)) {
      if ((n !== 'person') && (n !== 'role')) {
        allocation.set(n, this.get(n));
      }
    }
    this.setPersonOrRole(allocation);
    this.get('controllers.projects').set('lastLikelihood', this.get('likelihood'));
    return this.get('controllers.projects').set('lastEndDate', this.get('endDate'));
  }
});

export default AllocationsModalController;
