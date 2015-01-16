`import Ember from "ember";`
`import ModalController from "t2-allocation/controllers/modal";`
`import FormDateRangeMixin from "t2-allocation/mixins/form-date-range";`

EDITABLE_PROPERTIES = [
  'billable'
  'binding'
  'endDate'
  'notes'
  'project'
  'person'
  'startDate'
  'percentAllocated'
  'likelihood'
  'role'
]



ROLES = [ {name: 'Principal', id: 'role:principal', group: 'Roles'},
          {name: 'Product Manager', id: 'role:product_manager', group: 'Roles'},
          {name: 'Engineer', id: 'role:developer', group: 'Roles'},
          {name: 'Designer', id: 'role:designer', group: 'Roles'}]


editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

AllocationsModalController = ModalController.extend editableProps, FormDateRangeMixin

AllocationsModalController.reopen
  needs: ['office'],
  currentOffice: Ember.computed.alias('controllers.office.model'),


  _initialProject: null

  personOrRoleSelection: null

  people: (->
    @get('project.activePeople') || []
  ).property('project')

  peopleAndRoles: (->
    peopleAndRoles = Ember.ArrayProxy.create({content: []})
    peopleAndRoles.pushObjects(Em.A(ROLES))
    peopleAndRoles.pushObjects(@get('people').map (person) ->
      { name: person.get('name'), id: person.get('id'), person: person, group: 'People' }
    )
    peopleAndRoles
  ).property('project')

  percentAllocatedObserver: (->
    pct = @get('person.percentBillable')
    if @get('isNew')
      if @get('project.vacation')
        @set('percentAllocated', '100')
      else
        @set('percentAllocated', pct || "100")
  ).observes('personOrRoleSelection', 'project')

  projectSort: ['sortOrder:asc', 'name:asc']
  projects: Ember.computed.filter 'sortedProjects', (item) ->
    item.get('name') != 'Available'
  sortedProjects: Ember.computed.sort 'currentOffice.projects', 'projectSort'

  errors: (->
    errors = Ember.Object.create()
    @get('_editedModel.errors').forEach (error)->
      errors.set(error.attribute, error.message)
    errors
  ).property('_editedModel.errors.[]')

  isNew: Ember.computed.alias '_editedModel.isNew'

  likelihoodOptions: ['100% Booked', '90% Likely', '60% Likely', '30% Likely']

  getPersonOrRole: (allocation) ->
    @get('peopleAndRoles').find (personOrRole) =>
      allocation.get('person.content.id') == personOrRole.id || allocation.get('role') == personOrRole.name

  setPersonOrRole: (allocation) ->
    selected = @get('personOrRoleSelection')
    if selected.group == 'People'
      allocation.set('person', selected.person)
      allocation.set('role', null)
    else
      allocation.set('person', null)
      allocation.set('role', selected.name)

  _initForm: (allocation)->
    @set('project', null)
    for n in EDITABLE_PROPERTIES
      @set(n, allocation.get(n))
    @set('personOrRoleSelection', @getPersonOrRole(allocation))

  _applyChanges: (allocation)->
    for n in EDITABLE_PROPERTIES
      unless n == 'person' || n == 'role'
        allocation.set(n, @get(n))
    @setPersonOrRole(allocation)

`export default AllocationsModalController;`
