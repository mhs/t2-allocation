`import Ember from "ember";`
`import { animateModalOpen, animateModalClose } from 't2-allocation/utils/modal-animation';`
ApplicationRoute = Ember.Route.extend
  beforeModel: (transition)->
    auth = @controllerFor('authentication')
    auth.extractAccessToken()
    if not auth.get('isAuthenticated')
      transition.abort()
      auth.login()

  _createAllocation: (allocationAttrs) ->
    defaults =
      startDate: moment()
      endDate: moment().add(2,'weeks')
    @_editAllocation(@store.createRecord('allocation', Ember.merge(defaults, allocationAttrs)))

  _editAllocation: (allocation) ->
    @controllerFor("allocations/modal").edit allocation
    @send "openModal", "allocations/modal"

  _openModal: (modal) ->
    @render modal,
      into: "application"
      outlet: "modal"

  actions:
    createAllocation: (allocationAttrs={}) ->
      @_createAllocation(allocationAttrs)

    editAllocation: (allocation) ->
      @_editAllocation(allocation)

    quickView: (allocation) ->
      @send "quickViewModal", allocation

    quickViewModal: (allocation) ->
      @controllerFor("QuickLookModal").set "model", allocation
      @render "allocations/quick-look-modal",
        into: "application"
        outlet: "quickLook"
        view: "QuickLookModal"
        controller: "QuickLookModal"

    close: (modal) ->
      @send "closeModal"

    error: (err) ->
      return
      auth = @controllerFor('authentication')
      auth.login()

    openModal: (modal) ->
      @_openModal(modal)

    closeModal: ->
      self = @
      animateModalClose().then =>
        @disconnectOutlet
          outlet: "modal"
          parentView: "application"

    closeQuickLook: ->
      self = @
      animateModalClose().then =>
        @disconnectOutlet
          outlet: "quickLook"
          parentView: "application"

    loading: ->
      unless @get('loadingView')
        view = @container.lookup('view:loading').append()
        @set('loadingView', view)

      @router.one('didTransition', =>
        @get('loadingView').destroy()
      )

`export default ApplicationRoute;`
