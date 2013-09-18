App.ModalView = Em.View.extend(
  layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>")
  didInsertElement: ->
    App.animateModalOpen()
    $("body").on "keyup.modal", ((event) ->
      @get("controller").send "close"  if event.keyCode is 27
    ).bind(this)
    @$("input[type=text]").first().focus()

  willDestroyElement: ->
    $("body").off "keyup.modal"
)
App.ProjectsModalView = App.ModalView.extend({})
App.AllocationsModalView = App.ModalView.extend({})
App.ConfirmDeleteView = App.ModalView.extend()
