EDITABLE_PROPERTIES = [
  'billable'
  'binding'
  'endDate'
  'notes'
  'person'
  'project'
  'slot'
  'startDate'
  'percentAllocated'
]
editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

App.AllocationsModalController = App.ModalController.extend editableProps

App.AllocationsModalController.reopen
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

  startDateDidChange: (->
    startDate = @get('startDate')
    endDate = @get('endDate')

    if endDate && endDate < startDate
      @set('endDate', startDate)
  ).observes('startDate')

  formStartDate: ((k, v) ->
    if arguments.length > 1
      [y, m, d] = v.split('-')
      newDate = new Date(y, m - 1, d)
      @set('startDate', newDate)
    App.dateMunge @get('startDate')
  ).property('startDate')

  formEndDate: ((k, v) ->
    if arguments.length > 1
      [y, m, d] = v.split('-')
      @set('endDate', new Date(y, m - 1, d))
    App.dateMunge @get('endDate')
  ).property('endDate')

  projects: (->
    projects = @get('currentOffice.projects')
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects
    Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName)
  ).property('currentOffice')

  isNew: (->
    @_editedModel.get('isNew')
  ).property('_editedModel')

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
