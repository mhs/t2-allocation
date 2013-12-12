App.SelectableOffice = Ember.ObjectProxy.extend
  selected: []
  isSelected: ( (key, value)->
    office = @get('content')

    unless value == undefined
      if value then @selected.add(office) else @selected.remove(office)

    @selected.contains(office)
  ).property('selected.[]')

EDITABLE_PROPERTIES = ['name', 'billable', 'notes']
editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

App.ProjectsModalController = App.ModalController.extend editableProps

App.ProjectsModalController.reopen
  isDirty: true

  availableOffices: []

  _selectedOffices: Ember.Set.create()

  _initForm: (project)->
    for n in EDITABLE_PROPERTIES
      @set(n, project.get(n))

    @_initSelectedOffices(project)

  _initSelectedOffices: (project)->
    selected = @_selectedOffices
    selected.clear()
    selected.addEach(project.get('offices'))

  _updateOffices: (project)->
    @_removeFromItsOffices(project)
    @_addToSelectedOffices(project)

  _removeFromItsOffices: (project)->
    offices = project.get('offices')
    offices.forEach (office)->
      office.get('projects').removeObject(project)
    offices.clear()

  _addToSelectedOffices: (project)->
    offices = project.get('offices')
    @_selectedOffices.forEach (office)->
      _projects = office.get('projects')
      _projects.pushObject(project)
      offices.pushObject(office)

  _applyChanges: (project)->
    for n in EDITABLE_PROPERTIES
      project.set(n, @get(n))

    @_updateOffices(project)

  _beforeDelete: (project)->
    @_removeFromItsOffices(project)

  offices: (->
    self = @
    @get("availableOffices").map (office) ->
      App.SelectableOffice.create
        selected: self._selectedOffices
        content: office
  ).property("availableOffices.@each")
