// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import DEFAULT_CSS_TRANSITION_DURATION_MS from 't2-allocation/utils/constants';

let animateModalClose = function() {
  let deferred = Ember.RSVP.defer();
  $(".modal").removeClass("in");
  $(".modal-backdrop").removeClass("in");
  setTimeout((() => deferred.resolve()), DEFAULT_CSS_TRANSITION_DURATION_MS);
  return deferred.promise;
};

let animateModalOpen = function() {
  let deferred = Ember.RSVP.defer();
  $(".modal-backdrop").addClass("in");
  $(".modal").addClass("in");
  setTimeout((() => deferred.resolve("ok")), DEFAULT_CSS_TRANSITION_DURATION_MS);
  return deferred.promise;
};

export { animateModalOpen, animateModalClose };
