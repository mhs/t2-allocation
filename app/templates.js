this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["allocation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<span class=\"identifier\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "person.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span> ");
  return buffer;
  }

  data.buffer.push("<div class = \"allocationContent\">\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "person", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span class=\"range\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.shortDate || depth0.shortDate),stack1 ? stack1.call(depth0, "startDate", options) : helperMissing.call(depth0, "shortDate", "startDate", options))));
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.shortDate || depth0.shortDate),stack1 ? stack1.call(depth0, "endDate", options) : helperMissing.call(depth0, "shortDate", "endDate", options))));
  data.buffer.push("</span>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["allocations"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "allocation", "", options) : helperMissing.call(depth0, "render", "allocation", "", options))));
  data.buffer.push("\n	");
  return buffer;
  }

  data.buffer.push("<div class=\"allocations\">\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["allocations/modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      Create Allocation\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      Editing Allocation\n    ");
  }

function program5(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        Saving...\n      ");
  }

  data.buffer.push("<div class=\"modal\">\n  <div class=\"modal-header\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNew", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"modal-body\">\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.startDate:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Start Date</label>\n        ");
  hashContexts = {'class': depth0,'dateBinding': depth0};
  hashTypes = {'class': "STRING",'dateBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'class': ("start-date"),
    'dateBinding': ("startDate")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.startDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.end_date:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>End Date</label>\n        ");
  hashContexts = {'class': depth0,'dateBinding': depth0};
  hashTypes = {'class': "STRING",'dateBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'class': ("end-date"),
    'dateBinding': ("endDate")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.endDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.billable:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Billable</label>\n        ");
  hashContexts = {'checkedBillable': depth0};
  hashTypes = {'checkedBillable': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBillable': ("billable")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.billable", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.binding:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Binding</label>\n        ");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("binding")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.binding", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.notes:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Notes</label>\n        ");
  hashContexts = {'valueBinding': depth0};
  hashTypes = {'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("notes")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.notes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.person:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Person</label>\n        ");
  hashContexts = {'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'valueBinding': depth0,'selectionBinding': depth0,'prompt': depth0};
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'valueBinding': "STRING",'selectionBinding': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("people"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'valueBinding': ("person_id"),
    'selectionBinding': ("person"),
    'prompt': ("Select a name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.person", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.project:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Project</label>\n        ");
  hashContexts = {'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'valueBinding': depth0,'selectionBinding': depth0,'prompt': depth0};
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'valueBinding': "STRING",'selectionBinding': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("projects"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content"),
    'valueBinding': ("project"),
    'selectionBinding': ("project"),
    'prompt': ("Select a project")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.project", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'disabled': ("shouldDisableSubmit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSaving", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </form>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"container\">\n	<div class=\"main\">\n		");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	</div>\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["confirm/delete"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal\">\n  <div class=\"modal-header\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n  <div class=\"modal-body\">\n    Are you sure you want to delete this?\n  </div>\n  <div class=\"modal-footer\">\n    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Yes delete this</button>\n    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n  </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["empty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

this["Ember"]["TEMPLATES"]["project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n<article class=\"project\" ");
  hashContexts = {'data-project-id': depth0};
  hashTypes = {'data-project-id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-project-id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("projectHeight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n	<div class=\"container\">\n		<div class=\"allocations\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "allocation", "in", "currentAllocations", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers.view.call(depth0, "App.ProjectEditView", {hash:{
    'class': ("descriptor")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</article>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "allocation", "allocation", options) : helperMissing.call(depth0, "render", "allocation", "allocation", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n	");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "App.ProjectAllocationsView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["projects/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EditDateView", {hash:{
    'id': ("datepicker")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <span ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editDate", {hash:{
    'on': ("click")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "date", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "project", "project", options) : helperMissing.call(depth0, "render", "project", "project", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<section id=\"controls\">\n  <div class=\"title\">\n    <h1>Projects</h1>\n  </div>\n  <button class=\"new-project-button\" style=\"float: right;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProject", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add Project</button>\n  <button class=\"new-allocation-button\" style=\"float: right;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAllocation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add Allocation</button>\n</section>\n<section id=\"timeline\">\n  <section id=\"calendarBar\">\n    <div class=\"selector\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"calendar\">\n      <ul>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "date", "in", "dateRange", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  </section>\n  <section id=\"projectList\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "project", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </section>\n</section>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["projects/modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      Create Project\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      Editing: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n            <li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("office.isSelected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectOffice", "office", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "office.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n        Saving...\n      ");
  }

  data.buffer.push("<div class=\"modal\">\n  <div class=\"modal-header\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNew", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"modal-body\">\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.name:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Name</label>\n        ");
  hashContexts = {'valueBinding': depth0};
  hashTypes = {'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.name", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.billable:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Billable</label>\n        ");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("billable")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.billable", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.binding:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Binding</label>\n        ");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("binding")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.binding", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.notes:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Notes</label>\n        ");
  hashContexts = {'valueBinding': depth0};
  hashTypes = {'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("notes")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.notes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.offices:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Offices</label>\n        <ul>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "office", "in", "selectedOffices", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.offices", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'disabled': ("shouldDisableSubmit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSaving", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </form>\n</div>\n");
  return buffer;
  
});