App.projectsUI = Ember.Object.create({
  date: moment().format("L"),
  daysInWindow: Math.ceil((window.innerWidth-App.WIDTH_OF_DESCRIPTOR)/App.WIDTH_OF_DAY)
});