import Ember from "ember";

let EditDateView = Ember.TextField.extend({
  didInsertElement() {
    return this.$().focus();
  },

  focusIn(event) {
    let self = this;
    this.set("value", moment(UIGlobal.projectsUI.get("date")).format("YYYY-MM-DD"));
    return this.$().datepicker({
      dateFormat: "yy-mm-dd",
      onClose(date){
        return self.triggerAction({actionContext: date});
      }
    });
  }
});

export default EditDateView;
