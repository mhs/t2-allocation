`import Ember from "ember";`
`import ModalController from "t2-allocation/controllers/modal";`
`import dateMunge from "t2-allocation/utils/date-munge";`

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
]

ROLES = [ {name: 'Principal', id: 'role:principal', group: 'Roles'},
          {name: 'Product Manager', id: 'role:product_manager', group: 'Roles'},
          {name: 'Engineer', id: 'role:developer', group: 'Roles'},
          {name: 'Designer', id: 'role:designer', group: 'Roles'}]


editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

AllocationsModalController = ModalController.extend editableProps

AllocationsModalController.reopen
  needs: ['office'],
  currentOffice: Ember.computed.alias('controllers.office.model'),

  isDirty: true

  _initialProject: null

  people: (->
    project = @get('project')
    if !project
      return []
    sortByName =
      sortProperties: ['name']
      content: []
    people = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
    for office in project.get('offices').toArray()
      people.pushObjects(office.get('activePeople').toArray())
    people
  ).property('project')

  peopleAndRoles: (->
    peopleAndRoles = Ember.ArrayProxy.create({content: []})
    peopleAndRoles.pushObjects(Em.A(ROLES))
    peopleAndRoles.pushObjects(@get('people').map (person) ->
      { name: person.get('name'), id: person.get('id'), person: person, group: 'People' }
    )
    peopleAndRoles
  ).property('project')

  billableObserver: (->
    project = @get('project')
    return if !project
    @set('billable', project.get('billable')) if @_wasNew
  ).observes('project')

  bindingObserver: (->
    project = @get('project')
    return if !project
    @set('binding', project.get('billable') || project.get('vacation')) if @_wasNew
  ).observes('project')

  percentAllocatedObserver: (->
    pct = @get('person.percentBillable')
    if @_wasNew
      if @get('project.vacation')
        @set('percentAllocated', '100')
      else
        @set('percentAllocated', pct || "100")
  ).observes('person', 'project')

  startDateDidChange: (->
    startDate = moment(@get('startDate'))
    endDate = moment(@get('endDate'))

    if endDate && endDate.isBefore(startDate)
      @set('endDate', startDate)
  ).observes('startDate')

  formStartDate: ((k, v) ->
    if arguments.length > 1
      @set('startDate', moment(v))
    dateMunge @get('startDate')
  ).property('startDate')

  formEndDate: ((k, v) ->
    if arguments.length > 1
      @set('endDate', moment(v))
    dateMunge @get('endDate')
  ).property('endDate')

  projects: (->
    projects = @get('currentOffice.projects')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects
    Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
  ).property('currentOffice')

  errors: (->
    errors = Ember.Object.create()
    @get('_editedModel.errors').forEach (error)->
      errors.set(error.attribute, error.message)
    errors
  ).property('_editedModel.errors.[]')

  isNew: (->
    @_editedModel.get('isNew')
  ).property('_editedModel')

  likelihoodOptions: ['100% Booked', '90% Likely', '60% Likely', '30% Likely']

  personOrRole: (allocation, value) ->
    if value.content.group == 'People' 
      # save person
      allocation.set('person', value.content.person)
      allocation.set('role', null)
    else
      # save role
      allocation.set('person', null)
      allocation.set('role', value.content.name)

  _initForm: (allocation)->
    @_wasNew = allocation.get('isNew')
    @_initialProject = allocation.get('project')
    @set('project', null)
    for n in EDITABLE_PROPERTIES
      @set(n, allocation.get(n))

  _applyChanges: (allocation)->
    for n in EDITABLE_PROPERTIES
      if n == 'person'
        @personOrRole(allocation, @get(n))
      else
        allocation.set(n, @get(n))

    newProject = @get('project')
    if newProject != @_initialProject || @_wasNew
      @_initialProject.get('allocations').removeObject(allocation) if @_initialProject
      newProject.get('allocations').pushObject(allocation) if newProject

  _beforeDelete: (allocation)->
    @_initialProject.get('allocations').removeObject(allocation) if @_initialProject

`export default AllocationsModalController;`
