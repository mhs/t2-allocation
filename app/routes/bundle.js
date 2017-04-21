import Ember from "ember";
let BundleRoute = Ember.Route.extend({
  model(params) {
    let { startDate } = params;
    let monday = moment(startDate).startOf("week").add("d", 1);
    UIGlobal.projectsUI.set("date", monday.format("YYYY-MM-DD"));

    return this.store.query("allocationBundle", {
      start_date: this.get("startDate"),
      end_date: this.get("endDate")
    });
  },

  serialize(model) {
    return { startDate: this.get("startDate") };
  },

  startDate: Ember.computed('UIGlobal.projectsUI.startDate', function () {
    return moment(UIGlobal.projectsUI.get("startDate")).format("YYYY-MM-DD");
  }),

  endDate: Ember.computed('UIGlobal.projectsUI.endDate', function () {
    return moment(UIGlobal.projectsUI.get("endDate")).format("YYYY-MM-DD");
  })
});
export default BundleRoute;
