App.ModalView = Em.View.extend(
  layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>")
  didInsertElement: ->
    self = @
    # hack to fix race condition not triggering CSS transition
    Ember.run.later(@, ->
      $(".modal-backdrop").addClass "in"
      $(".modal").addClass "in"
    ,1)
    offset = $(document).scrollTop()
    viewportHeight = $(window).height()
    $(".modal").css('top',  (offset  + (viewportHeight/2)) - ($(".modal").outerHeight()/2))
    $("body").on "keyup.modal", (event) ->
      self.get("controller").send "close"  if event.keyCode is 27
    @$("input[type=text]").first()

  willDestroyElement: ->
    $("body").off "keyup.modal"
)
App.ProjectsModalView = App.ModalView.extend()
App.AllocationsModalView = App.ModalView.extend()
App.ConfirmDeleteView = App.ModalView.extend()
App.QuickLookModalView = App.ModalView.extend()
