App.AllocationEditObject = Ember.Object.extend
  init: ()->
    @set('isDirty', true)

    @_keys = [
      'billable'
      'binding'
      'endDate'
      'notes'
      'person'
      'project'
      'slot'
      'startDate'
    ]

    @_initialProject = @model.get('project')

    for key in @_keys
      @set(key, @model.get(key))

    @

  save: ()->

    for key in @_keys
      @model.set(key, @get(key))

    newProject = @get('project')
    if @_initialProject != newProject
      @_initialProject.get('allocations').removeObject(@model) if @_initialProject?
      newProject.get('allocations').pushObject(@model) if newProject?

    @model.save()

  cancel: ()->
    @model.destroy() if @model.isNew
