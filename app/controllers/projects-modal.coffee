`import Ember from "ember";`
`import ModalController from "t2-allocation/controllers/modal"`
`import SelectableOffice from "t2-allocation/models/selectable-office"`
`import dateMunge from "t2-allocation/utils/date-munge";`

EDITABLE_PROPERTIES = ['name', 'billable', 'provisional', 'notes', 'startDate', 'endDate']
editableProps = EDITABLE_PROPERTIES.reduce (props, name)->
  props[name] = null
  props
, {}

ProjectsModalController = ModalController.extend editableProps

ProjectsModalController.reopen
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
    offices = project.get('offices')
    offices.clear()
    @_selectedOffices.forEach (selected) ->
      offices.pushObject(selected)

  _applyChanges: (project)->
    for n in EDITABLE_PROPERTIES
      project.set(n, @get(n))

    @_updateOffices(project)

  _beforeDelete: (project)->
    @_removeFromItsOffices(project)

  formStartDate: ((k, v) ->
    if arguments.length > 1
      @set('startDate', moment(v))
    value = @get('startDate')
    dateMunge(value) if value
  ).property('startDate')

  formEndDate: ((k, v) ->
    if arguments.length > 1
      @set('endDate', moment(v))
    value = @get('endDate')
    dateMunge(value) if value
  ).property('endDate')

  offices: (->
    self = @
    @get("availableOffices").map (office) ->
      SelectableOffice.create
        selected: self._selectedOffices
        content: office
  ).property("availableOffices.@each")

`export default ProjectsModalController;`
