import Ember from "ember";
import { animateModalOpen, animateModalClose } from 't2-allocation/utils/modal-animation';
let ApplicationRoute = Ember.Route.extend({
  beforeModel(transition){
    let auth = this.controllerFor('authentication');
    auth.extractAccessToken();
    if (!auth.get('isAuthenticated')) {
      transition.abort();
      auth.login();
    }
  },

  _createAllocation(allocationAttrs) {
    let defaults = {
      startDate: moment(),
      endDate: moment().add(2,'weeks')
    };
    return this._editAllocation(this.store.createRecord('allocation', Ember.merge(defaults, allocationAttrs)));
  },

  _editAllocation(allocation) {
    this.controllerFor("allocations/modal").edit(allocation);
    return this.send("openModal", "allocations/modal");
  },

  _openModal(modal) {
    return this.render(modal, {
      into: "application",
      outlet: "modal"
    }
    );
  },

  actions: {
    createAllocation(allocationAttrs) {
      if (allocationAttrs == null) { allocationAttrs = {}; }
      return this._createAllocation(allocationAttrs);
    },

    editAllocation(allocation) {
      return this._editAllocation(allocation);
    },

    quickView(allocation) {
      return this.send("quickViewModal", allocation);
    },

    quickViewModal(allocation) {
      this.controllerFor("QuickLookModal").set("model", allocation);
      return this.render("allocations/quick-look-modal", {
        into: "application",
        outlet: "quickLook",
        view: "QuickLookModal",
        controller: "QuickLookModal"
      }
      );
    },

    close(modal) {
      return this.send("closeModal");
    },

    openModal(modal) {
      return this._openModal(modal);
    },

    closeModal() {
      let self = this;
      return animateModalClose().then(() => {
        return this.disconnectOutlet({
          outlet: "modal",
          parentView: "application"
        });
      }
      );
    },

    closeQuickLook() {
      let self = this;
      return animateModalClose().then(() => {
        return this.disconnectOutlet({
          outlet: "quickLook",
          parentView: "application"
        });
      }
      );
    },

    loading() {
      if (!this.get('loadingView')) {
        let view = this.container.lookup('view:loading').append();
        this.set('loadingView', view);
      }

      return this.router.one('didTransition', () => {
        return this.get('loadingView').destroy();
      }
      );
    }
  }
});

export default ApplicationRoute;
