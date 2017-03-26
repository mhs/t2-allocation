`import Ember from "ember";`
BundleRoute = Ember.Route.extend
  model: (params) ->
    startDate = params.startDate
    monday = moment(startDate).startOf("week").add("d", 1)
    UIGlobal.projectsUI.set('date', monday.format("YYYY-MM-DD"))

    @store.find 'allocationBundle',
      start_date: @get('startDate')
      end_date: @get('endDate')

  serialize: (model) ->
    {startDate: @get('startDate')}

  startDate:(->
    moment(UIGlobal.projectsUI.get('startDate')).format "YYYY-MM-DD"
  ).property('UIGlobal.projectsUI.startDate')

  endDate:(->
    moment(UIGlobal.projectsUI.get('endDate')).format "YYYY-MM-DD"
  ).property('UIGlobal.projectsUI.endDate')
  actions:
    updateBundle: ->
      @store.fetch 'allocationBundle',
        start_date: @get('startDate')
        end_date: @get('endDate')
`export default BundleRoute;`
