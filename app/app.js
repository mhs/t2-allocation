(function() {

  window.App = Ember.Application.create();

  window.App.API_BASEURL = (function() {
    var api_extension;
    api_extension = "http://localhost:5000";
    if (!/localhost/.test(document.location.href)) {
      api_extension = "http://t2api.herokuapp.com";
    }
    return "" + api_extension + "/api/v1";
  })();

}).call(this);

(function() {

  App.ModalController = Em.ObjectController.extend({
    save: function() {
      this.get("model").save();
      return this.send("closeModal");
    },
    close: function() {
      return this.send("closeModal");
    },
    shouldDisableSubmit: (function() {
      return !this.get("isDirty");
    }).property("isDirty")
  });

}).call(this);

(function() {

  App.AllocationController = Ember.ObjectController.extend({
    startOffset: (function() {
      var currentMonday, startDate;
      currentMonday = moment(App.projectsUI.get("date")).startOf("week");
      startDate = moment(this.get("startDate")) || moment();
      return startDate.diff(currentMonday, "days");
    }).property("App.projectsUI.date", "startDate"),
    style: (function() {
      var duration, scale, startOffset;
      scale = 16;
      startOffset = this.get("startOffset");
      duration = this.get("duration");
      if (startOffset < 0) {
        duration += startOffset - 1;
        startOffset = 0;
      }
      return "top: " + (this.get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; ";
    }).property("startOffset", "duration", "track")
  });

}).call(this);

(function() {

  App.AllocationsModalController = App.ModalController.extend({
    offices: [],
    people: [],
    projects: [],
    currentProject: null,
    updateProject: (function() {
      var currentProject, model, newProject, projectAllocations, _ref;
      model = this.get("model");
      currentProject = this.get('currentProject');
      if (model) {
        newProject = model.get('project');
        if (currentProject && currentProject !== newProject) {
          if ((_ref = currentProject.get('allocations')) != null) {
            _ref.removeObject(model);
          }
        }
        if (newProject) {
          projectAllocations = newProject.get('allocations');
          if (projectAllocations && !projectAllocations.toArray().contains(model)) {
            projectAllocations.pushObject(model);
            return this.set("currentProject", newProject);
          }
        }
      }
    }).observes("model.project")
  });

}).call(this);

(function() {

  App.AuthenticationController = Ember.ObjectController.extend({
    init: function() {
      return this.set('accessToken', localStorage.accessToken);
    },
    accessToken: null,
    isAuthenticated: Ember.computed.notEmpty('accessToken'),
    redirectToSignIn: function() {
      var uri;
      uri = window.ENV.apiHost + "/sign_in?";
      uri += "&return_url=" + escape(location.protocol + "//" + location.host);
      return location.href = uri;
    },
    logout: function() {
      this.set('accessToken', null);
      return location.href = window.ENV.apiHost + "/sign_out";
    },
    extractAccessToken: function() {
      var match;
      match = location.href.match(/authentication_token=([a-zA-Z0-9]+)/);
      if (match) {
        return this.set('accessToken', match[1]);
      }
    },
    accessTokenChanged: (function() {
      var token;
      token = this.get('accessToken');
      if (token) {
        return localStorage.accessToken = token;
      } else {
        return delete localStorage.accessToken;
      }
    }).observes("accessToken")
  });

}).call(this);

(function() {

  App.ConfirmDeleteController = Em.ObjectController.extend({
    confirmDelete: function(model, afterDeleteRoute) {
      this.set("model", model);
      return this.set("afterDeleteRoute", afterDeleteRoute);
    },
    confirm: function() {
      var after, model;
      model = this.get("model");
      after = this.get("afterDeleteRoute");
      model.deleteRecord();
      this.close();
      if (after) {
        return this.transitionToRoute(after);
      }
    },
    close: function() {
      return this.send("closeModal");
    }
  });

}).call(this);

(function() {

  App.ProjectController = Ember.ObjectController.extend({
    content: null,
    trackCount: 0,
    currentAllocations: (function() {
      var allocations, trackNo;
      allocations = this.get("allocations").filterProperty("current");
      trackNo = 0;
      allocations.forEach(function(allocation) {
        return allocation.set("track", trackNo++);
      });
      this.set("trackCount", trackNo);
      return allocations;
    }).property("allocations.[]", "allocations.@each.current"),
    projectHeight: (function() {
      return "height: " + (this.get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;";
    }).property("trackCount")
  });

}).call(this);

(function() {

  App.ProjectsIndexController = Ember.ArrayController.extend({
    isEditing: false,
    dateBinding: "App.projectsUI.date",
    daysInWindowBinding: "App.projectsUI.daysInWindow",
    createAllocation: function() {
      var allocation;
      allocation = App.Allocation.create({
        startDate: new Date(),
        endDate: new Date(moment().add(2, 'weeks').format('L'))
      });
      return this.send('editAllocation', allocation);
    },
    createProject: function() {
      var project;
      project = App.Project.create();
      return this.send("editProject", project);
    },
    editDate: function() {
      return this.set("isEditing", true);
    },
    confirmDate: function(dateValue) {
      var date, shortDate;
      date = void 0;
      if (!moment(dateValue).isValid()) {
        dateValue = App.projectsUI.get("date");
      }
      shortDate = moment(dateValue).format("L");
      this.set("isEditing", false);
      return App.projectsUI.set("date", shortDate);
    },
    dateRange: (function() {
      var date, dateArray, daysInWindow, i, monday;
      date = moment(this.get("date"));
      daysInWindow = this.get("daysInWindow");
      if (!date.isValid()) {
        date = moment();
      }
      dateArray = [];
      monday = moment(date).startOf("week").add("days", 1);
      i = 0;
      while (i <= (daysInWindow / 7)) {
        dateArray.push(moment(monday).add("week", i).format("MMM D"));
        i++;
      }
      return dateArray;
    }).property("date", "daysInWindow"),
    firstDate: (function() {
      return moment(App.projectsUI.get("date")).format("MMMM D, YYYY");
    }).property("date")
  });

}).call(this);

(function() {

  App.ProjectsModalController = App.ModalController.extend({
    offices: [],
    selectedOffices: (function() {
      return this.get("offices").map(function(item) {
        return Ember.ObjectProxy.create({
          content: item,
          isSelected: false
        });
      });
    }).property("offices"),
    selectOffice: function(office) {
      var toggle;
      toggle = !office.get("isSelected");
      return office.set("isSelected", toggle);
    },
    create: function() {
      var project;
      project = App.Project.create();
      return this.set("model", project);
    }
  });

}).call(this);

(function() {

  App.AJAX_LOADER_IMG = "<%= image_path('ajax-loader.gif') %>";

  App.DEFAULT_CSS_TRANSITION_DURATION_MS = 250;

  App.ALLOCATION_HEIGHT = 30;

  App.WIDTH_OF_DAY = 16;

  App.WIDTH_OF_DESCRIPTOR = 192;

}).call(this);

(function() {

  App.DateField = Ember.TextField.extend({
    type: "date",
    date: (function(key, date) {
      var value;
      if (date) {
        this.set("value", date.toISOString().substring(0, 10));
      } else {
        value = this.get("value");
        if (value) {
          date = new Date(value);
        } else {
          date = null;
        }
      }
      return date;
    }).property("value")
  });

}).call(this);

(function() {
  var makeDate;

  Ember.Handlebars.helper("shortDate", function(unformatted_date) {
    var date;
    date = makeDate(unformatted_date);
    return date.monthName + " " + date.day;
  });

  makeDate = function(unformatted_date) {
    var date, days, months, pad;
    date = new Date(unformatted_date);
    if (date instanceof Date) {
      days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      pad = function(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return "" + num;
        }
      };
      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        monthName: months[date.getUTCMonth()],
        day: pad(date.getUTCDate()),
        weekday: days[date.getUTCDay()],
        hour: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds()
      };
    } else if (date === undefined) {
      return undefined;
    } else {
      return null;
    }
  };

}).call(this);

(function() {

  App.DateUI = Ember.Object.extend({
    date: null,
    daysInWindow: null,
    startDate: (function() {
      return new Date(this.date);
    }).property("date"),
    endDate: (function() {
      var end;
      end = moment(this.date).add("days", this.daysInWindow);
      return new Date(end);
    }).property("date", "daysInWindow")
  });

  App.projectsUI = App.DateUI.create({
    date: moment().format("L"),
    daysInWindow: Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY)
  });

}).call(this);

(function() {

  Ember.Application.initializer({
    name: 'ajaxInitializer',
    initialize: function(container, application) {
      return $.ajaxSetup({
        beforeSend: function(xhr) {
          var auth;
          auth = container.lookup("controller:authentication");
          xhr.setRequestHeader("Authorization", auth.get('accessToken'));
          return xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest");
        }
      });
    }
  });

  Ember.Application.initializer({
    name: 'authenticationInitializer',
    after: 'ajaxInitializer',
    initialize: function(container, application) {
      var auth;
      auth = container.lookup('controller:authentication');
      return auth.extractAccessToken();
    }
  });

}).call(this);

(function() {

  App.Allocation = Ember.Model.extend({
    id: Ember.attr(),
    notes: Ember.attr(),
    startDate: Ember.attr(Date),
    endDate: Ember.attr(Date),
    billable: Ember.attr(),
    binding: Ember.attr(),
    slot: Ember.belongsTo("App.Slot", {
      key: 'slot_id'
    }),
    person: Ember.belongsTo("App.Person", {
      key: 'person_id'
    }),
    project: Ember.belongsTo("App.Project", {
      key: 'project_id'
    }),
    track: 0,
    current: (function() {
      return this.get("startDate") < App.projectsUI.get("endDate") && this.get("endDate") > App.projectsUI.get("startDate");
    }).property("startDate", "endDate", "App.projectsUI.startDate", "App.projectsUI.endDate"),
    duration: (function() {
      var end, start;
      start = moment(this.get("startDate")) || moment(this.get("endDate")) || moment();
      end = moment(this.get("endDate")) || moment(this.get("startDate")) || moment();
      return end.diff(start, "days") + 1;
    }).property("startDate", "endDate")
  });

  App.Allocation.url = "" + App.API_BASEURL + "/allocations";

  App.Allocation.collectionKey = 'allocations';

  App.Allocation.adapter = Ember.RESTAdapter.create();

}).call(this);

(function() {

  App.Office = Ember.Model.extend({
    id: Ember.attr(),
    name: Ember.attr(),
    notes: Ember.attr(),
    projects: Ember.hasMany("App.Project", {
      key: "project_ids"
    }),
    people: Ember.hasMany("App.Person", {
      key: "person_ids"
    })
  });

  App.Office.url = "" + App.API_BASEURL + "/offices";

  App.Office.collectionKey = 'offices';

  App.Office.adapter = Ember.RESTAdapter.create();

}).call(this);

(function() {

  App.Person = Ember.Model.extend({
    id: Ember.attr(),
    name: Ember.attr(),
    notes: Ember.attr(),
    email: Ember.attr(),
    unsellable: Ember.attr(),
    startDate: Ember.attr(Date),
    endDate: Ember.attr(Date),
    office: Ember.belongsTo("App.Office", {
      key: 'office_id'
    }),
    allocations: Ember.hasMany("App.Allocation", {
      key: "allocation_ids"
    }),
    mergedAllocations: (function() {
      var allocation, allocations, end, merged, newEnd, newStart, start, _i, _len;
      allocations = this.get('allocations').filterProperty('current').toArray().sort(function(a, b) {
        return a.get('startDate') - b.get('startDate');
      });
      merged = [];
      start = null;
      end = null;
      for (_i = 0, _len = allocations.length; _i < _len; _i++) {
        allocation = allocations[_i];
        newStart = allocation.get('startDate');
        newEnd = allocation.get('endDate');
        start || (start = newStart);
        end || (end = newEnd);
        if (end < newStart) {
          merged.push({
            startDate: start,
            endDate: end
          });
          start = newStart;
          end = newEnd;
        } else {
          if (end < newEnd) {
            end = newEnd;
          }
        }
      }
      merged.push({
        startDate: start,
        endDate: end
      });
      return merged;
    }).property("App.projectsUI.startDate", "App.projectsUI.endDate", 'allocation.[]', 'allocations.@each.current')
  });

  App.Person.url = "" + App.API_BASEURL + "/people";

  App.Person.collectionKey = 'people';

  App.Person.adapter = Ember.RESTAdapter.create();

}).call(this);

(function() {

  App.Project = Ember.Model.extend({
    id: Ember.attr(),
    name: Ember.attr(),
    notes: Ember.attr(),
    billable: Ember.attr(),
    vacation: Ember.attr(),
    slots: Ember.hasMany("App.Slot", {
      key: "slot_ids"
    }),
    allocations: Ember.hasMany("App.Allocation", {
      key: "allocation_ids"
    }),
    offices: Ember.hasMany("App.Office", {
      key: "office_ids"
    })
  });

  App.Project.url = "" + App.API_BASEURL + "/projects";

  App.Project.collectionKey = 'projects';

  App.Project.adapter = Ember.RESTAdapter.create();

}).call(this);

(function() {

  App.Slot = Ember.Model.extend({
    id: Ember.attr(),
    startDate: Ember.attr(Date),
    endDate: Ember.attr(Date),
    project: Ember.belongsTo("App.Project", {
      key: 'project_id'
    }),
    allocations: Ember.hasMany("App.Allocation", {
      key: "allocation_ids"
    })
  });

  App.Slot.url = "" + App.API_BASEURL + "/slots";

  App.Slot.collectionKey = 'slots';

  App.Slot.adapter = Ember.RESTAdapter.create();

}).call(this);

(function() {

  App.Router.map(function() {
    return this.resource("projects", function() {});
  });

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      return this.transitionTo('projects');
    }
  });

}).call(this);

(function() {

  App.ApplicationRoute = Ember.Route.extend({
    events: {
      openModal: function(modal) {
        return this.render(modal, {
          into: "application",
          outlet: "modal"
        });
      },
      closeModal: function() {
        return App.animateModalClose().then((function() {
          return this.render("empty", {
            into: "application",
            outlet: "modal"
          });
        }).bind(this));
      }
    }
  });

}).call(this);

(function() {

  App.ProjectsRoute = Ember.Route.extend({
    events: {
      editProject: function(project) {
        this.controllerFor("projects.modal").set("offices", App.Office.find());
        this.controllerFor("projects.modal").set('model', project);
        return this.send("openModal", "projects.modal");
      },
      editAllocation: function(allocation) {
        this.controllerFor("allocations.modal").set("offices", App.Office.find());
        this.controllerFor("allocations.modal").set("people", App.Person.find());
        this.controllerFor("allocations.modal").set("projects", App.Project.find());
        this.controllerFor("allocations.modal").set("currentProject", allocation.get('project'));
        this.controllerFor("allocations.modal").set('model', allocation);
        return this.send("openModal", "allocations.modal");
      },
      confirmDelete: function(record) {
        this.controllerFor("confirm.delete").confirmDelete(record, "projects.index");
        return this.send("openModal", "confirm.delete");
      }
    },
    setupController: function(controller) {
      App.Person.find();
      return this.controllerFor("projects.index").set("model", App.Project.find());
    }
  });

}).call(this);

(function() {

  App.animateModalClose = function() {
    var deferred;
    deferred = Ember.RSVP.defer();
    $(".modal.in").removeClass("in");
    $(".modal-backdrop.in").removeClass("in");
    setTimeout((function() {
      return deferred.resolve();
    }), App.DEFAULT_CSS_TRANSITION_DURATION_MS);
    return deferred.promise;
  };

  App.animateModalOpen = function() {
    var deferred;
    deferred = Ember.RSVP.defer();
    $(".modal").addClass("in");
    $(".modal-backdrop").addClass("in");
    setTimeout((function() {
      return deferred.resolve("ok");
    }), App.DEFAULT_CSS_TRANSITION_DURATION_MS);
    return deferred.promise;
  };

}).call(this);

(function() {

  App.AllocationView = Ember.View.extend({
    templateName: "allocation",
    attributeBindings: ["style"],
    styleBinding: "controller.style",
    doubleClick: function(evt) {
      var allocation;
      allocation = this.get('controller').get('model');
      this.get('controller').send('editAllocation', allocation);
      return false;
    }
  });

}).call(this);

(function() {

  App.EditDateView = Ember.TextField.extend({
    classNames: ["edit"],
    insertNewline: function() {
      return this.get("controller").confirmDate(event.target.value);
    },
    change: function(event) {
      if (this.value !== "") {
        return this.get("controller").confirmDate(event.target.value);
      }
    },
    didInsertElement: function() {
      return this.$().focus();
    },
    focusIn: function(event) {
      this.set("value", moment(App.projectsUI.get("date")).format("L"));
      return $(event.target).datepicker();
    }
  });

}).call(this);

(function() {

  App.ModalView = Em.View.extend({
    layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),
    didInsertElement: function() {
      App.animateModalOpen();
      $("body").on("keyup.modal", (function(event) {
        if (event.keyCode === 27) {
          return this.get("controller").send("close");
        }
      }).bind(this));
      return this.$("input[type=text]").first().focus();
    },
    willDestroyElement: function() {
      return $("body").off("keyup.modal");
    }
  });

  App.ProjectsModalView = App.ModalView.extend({});

  App.AllocationsModalView = App.ModalView.extend({});

  App.ConfirmDeleteView = App.ModalView.extend();

}).call(this);

(function() {

  App.ProjectAllocationsView = Ember.View.extend({
    doubleClick: function(evt) {
      return this.get('controller').send('createAllocation');
    }
  });

}).call(this);

(function() {

  App.ProjectEditView = Ember.View.extend({
    classNameBindings: ['hover'],
    hover: false,
    doubleClick: function(evt) {
      var project;
      project = this.get('controller').get('model');
      this.get('controller').send('editProject', project);
      return false;
    },
    mouseEnter: function(evt, view) {
      return this.set('hover', true);
    },
    mouseLeave: function(evt, view) {
      return this.set('hover', false);
    }
  });

}).call(this);

(function() {

  App.ProjectsIndexView = Ember.View.extend();

  $(window).resize(function() {
    var days;
    days = Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY);
    return App.projectsUI.set("daysInWindow", days);
  });

}).call(this);
