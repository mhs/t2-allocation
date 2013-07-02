App.animateModalClose = function() {
  var deferred = Ember.RSVP.defer();

  $('.modal.in').removeClass('in');
  $('.modal-backdrop.in').removeClass('in');

  setTimeout(function() {
    deferred.resolve();
  }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);

  return deferred.promise;
};

App.animateModalOpen = function() {
  var deferred = Ember.RSVP.defer();

  $('.modal').addClass('in');
  $('.modal-backdrop').addClass('in');

  setTimeout(function() {
    deferred.resolve('ok');
  }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);

  return deferred.promise;
};