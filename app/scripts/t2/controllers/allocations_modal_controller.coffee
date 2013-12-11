EDITABLE_PROPERTIES = [
  'billable'
  'binding'
  'endDate'
  'notes'
  'person'
  'project'
  'slot'
  'startDate'
]
editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

App.AllocationsModalController = App.ModalController.extend editableProps

App.AllocationsModalController.reopen
  needs: ['offices'],
  currentOffice: Ember.computed.alias('controllers.offices.model'),

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
      people.pushObjects(office.get('people').toArray())
    people
  ).property('project')

  billableObserver: (->
    project = @get('project')
    return if !project
    @set('billable', project.get('billable')) if @_wasNew
  ).observes('project')

  projects: (->
    projects = @get('currentOffice.projects')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects
    Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
  ).property('currentOffice')

  _initForm: (allocation)->
    @_wasNew = allocation.get('isNew')
    @_initialProject = allocation.get('project')
    @set('project', null)
    for n in EDITABLE_PROPERTIES
      @set(n, allocation.get(n))

  _applyChanges: (allocation)->
    for n in EDITABLE_PROPERTIES
      allocation.set(n, @get(n))

    newProject = @get('project')
    if newProject != @_initialProject || @_wasNew
      @_initialProject.get('allocations').removeObject(allocation) if @_initialProject
      newProject.get('allocations').pushObject(allocation) if newProject

  _beforeDelete: (allocation)->
    @_initialProject.get('allocations').removeObject(allocation) if @_initialProject
