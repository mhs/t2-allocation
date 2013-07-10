App.Router.map(function () {
  this.resource("projects", function() {
  });
});

App.Router.reopen({
  location: 'history'
});
