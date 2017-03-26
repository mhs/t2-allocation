// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
let BundleRoute = Ember.Route.extend({
  model(params) {
    let { startDate } = params;
    let monday = moment(startDate).startOf("week").add("d", 1);
    UIGlobal.projectsUI.set('date', monday.format("YYYY-MM-DD"));

    return this.store.find('allocationBundle', {
      start_date: this.get('startDate'),
      end_date: this.get('endDate')
    }
    );
  },

  serialize(model) {
    return {startDate: this.get('startDate')};
  },

  startDate:(() => moment(UIGlobal.projectsUI.get('startDate')).format("YYYY-MM-DD")).property('UIGlobal.projectsUI.startDate'),

  endDate:(() => moment(UIGlobal.projectsUI.get('endDate')).format("YYYY-MM-DD")).property('UIGlobal.projectsUI.endDate'),
  actions: {
    updateBundle() {
      return this.store.fetch('allocationBundle', {
        start_date: this.get('startDate'),
        end_date: this.get('endDate')
      }
      );
    }
  }
});
export default BundleRoute;
