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
  isDirty: true

  _initialProject: null

  people: []
  projects: []

  _initForm: (allocation)->
    for n in EDITABLE_PROPERTIES
      @set(n, allocation.get(n))
    @_initialProject = allocation.get('project')

  _applyChanges: (allocation)->
    for n in EDITABLE_PROPERTIES
      allocation.set(n, @get(n))

    newProject = @get('project')
    if newProject != @_initialProject
      @_initialProject.get('allocations').removeObject(allocation) if @_initialProject
      newProject.get('allocations').pushObject(allocation) if newProject
