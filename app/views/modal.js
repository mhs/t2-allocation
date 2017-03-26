// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";

let ModalView = Ember.View.extend({
  layoutName: "modal-layout",
  didInsertElement() {
    let self = this;
    // hack to fix race condition not triggering CSS transition
    Ember.run.later(this, function() {
      $(".modal-backdrop").addClass("in");
      return $(".modal").addClass("in");
    }
    ,1);
    let offset = $(document).scrollTop();
    let viewportHeight = $(window).height();
    $(".modal").css('top',  (offset  + (viewportHeight/2)) - ($(".modal").outerHeight()/2));
    $("body").on("keyup.modal", function(event) {
      if (event.keyCode === 27) { return self.get("controller").send("close"); }
    });
    return this.$("input[type=text]").first();
  },

  willDestroyElement() {
    return $("body").off("keyup.modal");
  }
});

export default ModalView;
