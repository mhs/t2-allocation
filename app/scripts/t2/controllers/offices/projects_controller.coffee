App.OfficesProjectsController = Ember.ObjectController.extend
  needs: ['offices']

  isEditingDate: false
  dateBinding: "App.projectsUI.date"
  daysInWindowBinding: "App.projectsUI.daysInWindow"

  offices: Ember.computed.alias('controllers.offices')

  sortedProjects: (->
    projects = @get('projects')
    people = @get('people')
    unless projects.findBy('dummyProject', true)
      dummyProject = App.DummyProject.create()
      projects.pushObject(dummyProject)
    unless projects.findBy('name', 'Available')
      availableProject = App.AvailableProject.create(people: people, office: @content, name: "Available")
      projects.pushObject(availableProject)
    sortByName =
      sortProperties: ['sortOrder', 'name']
      content: projects

    Ember.ArrayProxy.
      createWithMixins(Ember.SortableMixin,sortByName)
  ).property('projects')

  firstDate: (->
    moment(@get("date")).format "MMMM D, YYYY"
  ).property("date")

  dateRange: (->
    date = moment(@get("date"))
    daysInWindow = @get("daysInWindow")
    date = moment()  unless date.isValid()
    dateArray = []
    monday = moment(date)
    i = 0

    while i <= (daysInWindow / 7)
      dateArray.push moment(monday).add("week", i).format("MMM D")
      i++
    dateArray
  ).property("date", "daysInWindow")

  modelChanged: (->
    @send 'selectOffice', @get('model')
  ).observes('model')

  actions:
    editDate: ->
      @set "isEditingDate", true

    confirmDate: (dateValue) ->
      dateValue = @get("date") unless moment(dateValue).isValid()
      @set "isEditingDate", false
      @set "date", moment(dateValue).format("L")
