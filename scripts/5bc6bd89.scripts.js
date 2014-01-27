this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["allocation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span class=\"allocation-identifier\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "person.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <em>(");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "office.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(")</em>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span>@");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentAllocated", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("%</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"allocation-content\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("hint")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "person", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternal", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPartial", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  <span class=\"allocation-range\">");
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
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

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
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <a href=\"#\" class=\"delete\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Delete</a>\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n      Saving...\n    ");
  }

  data.buffer.push("<div class=\"modal\">\n  <div class=\"modal-header\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNew", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <span class=\"close-x\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#10060;</span>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"modal-project\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.project:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i>&#128710;</i>\n      <label>Project</label>\n      ");
  hashContexts = {'class': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'valueBinding': depth0,'selectionBinding': depth0,'prompt': depth0};
  hashTypes = {'class': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'valueBinding': "STRING",'selectionBinding': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("white-button"),
    'contentBinding': ("projects"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content"),
    'valueBinding': ("project"),
    'selectionBinding': ("project"),
    'prompt': ("Select a project")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.project", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"modal-person\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.person:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i>&#128100;</i>\n      <label>Person</label>\n      ");
  hashContexts = {'class': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'valueBinding': depth0,'selectionBinding': depth0,'prompt': depth0};
  hashTypes = {'class': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'valueBinding': "STRING",'selectionBinding': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("white-button"),
    'contentBinding': ("people"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content"),
    'valueBinding': ("person"),
    'selectionBinding': ("person"),
    'prompt': ("Select a name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "errors.person", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"dates\">\n      <div class=\"start\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.startDate:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i>&#128197;</i>\n        <label>Start Date</label>\n        ");
  hashContexts = {'name': depth0,'class': depth0,'value': depth0};
  hashTypes = {'name': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("startDate"),
    'class': ("start-date"),
    'value': ("formStartDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.startDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <span>-</span>\n      <div class=\"end\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.end_date:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>End Date</label>\n        ");
  hashContexts = {'name': depth0,'class': depth0,'value': depth0};
  hashTypes = {'name': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("endDate"),
    'class': ("end-date"),
    'value': ("formEndDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.endDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"options\">\n      <div class=\"billable\" data-test=\"billable\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.billable:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n        <label>");
  hashContexts = {'type': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("billable")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("Billable<span id=\"billable-check\"></span></label>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.billable", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <div class=\"exclusive\" data-test=\"binding\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.binding:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>");
  hashContexts = {'type': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("binding")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("Exclusive<span id=\"binding-check\"></span></label>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.binding", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"percent-allocated\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.binding:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i>&#9716;</i>\n      <label>% Allocated");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("percentAllocated")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</label>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.percentAllocated", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <div class=\"notes\" data-test=\"notes\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.notes:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i>&#9998;</i>\n      <label>Notes</label>\n      ");
  hashContexts = {'valueBinding': depth0};
  hashTypes = {'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("notes")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.notes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"blue-button\" type=\"submit\" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'disabled': ("shouldDisableSubmit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n    <button class=\"white-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "canDelete", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSaving", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  </form>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["allocations/quick_look_modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <div class=\"notes\" data-test=\"notes\">\n        <i>&#9998;</i>\n        <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "notes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal\">\n  <div class=\"modal-header\">\n    Allocation: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <span class=\"close-x\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#10060;</span>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"modal-person\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.person:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i>&#128100;</i>\n      <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "person.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n    </div>\n    <div class=\"dates\">\n      <i>&#128197;</i>\n      <div class=\"start\">\n        <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "startDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n      </div>\n      <span class=\"dash\">-</span>\n      <div class=\"end\">\n        <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "endDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n      </div>\n    </div>\n    <div class=\"options\">\n      <i>&#59249;</i>\n      <div class=\"billable preview\" data-test=\"billable\">\n        <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "billableStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n      </div>\n      <span>/</span>\n      <div class=\"exclusive\" data-test=\"binding\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.binding:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "bindingStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n      </div>\n    </div>\n    <div class=\"percent-allocated\">\n      <i>&#9716;</i>\n      <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentAllocated", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("% Allocated</h3>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "notes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"blue-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit</button>\n    <button class=\"white-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n  </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"container content-wrapper\">\n</div>\n\n<div class=\"main content-wrapper\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "quickLook", options) : helperMissing.call(depth0, "outlet", "quickLook", options))));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["availability"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span class=\"allocation-identifier\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "person.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <em>(");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "office.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(")</em>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span>@");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentAllocated", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("%</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"allocation-content\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("hint")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "person", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternal", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPartial", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  <span class=\"allocation-range\">");
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

this["Ember"]["TEMPLATES"]["available_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n  <article class=\"project\" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("projectHeight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"project-allocations\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "availability", "in", "currentAvailabilities", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"project-descriptor\">\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n  </article>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "availability", "availability", options) : helperMissing.call(depth0, "render", "availability", "availability", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "App.ProjectAllocationsView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/calendar-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'class': depth0,'action': depth0,'escape-press': depth0};
  hashTypes = {'class': "STRING",'action': "STRING",'escape-press': "STRING"};
  options = {hash:{
    'class': ("datepicker"),
    'action': ("confirmDate"),
    'escape-press': ("confirmDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['edit-date'] || depth0['edit-date']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "edit-date", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <span ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editDate", {hash:{
    'on': ("click")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <li class=\"week\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "date", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"calendar-date-selector\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isEditingDate", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<ul class=\"calendar\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "date", "in", "dateRange", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["dummy_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n  <article class=\"project dummy-project\" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("projectHeight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"project-allocations\">\n    </div>\n\n    <div class=\"project-descriptor\">\n      <button class=\"white-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProject", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add Project</button>\n    </div>\n  </article>\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "App.ProjectAllocationsView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["empty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

this["Ember"]["TEMPLATES"]["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<pre id=\"loading\">\n  <div class=\"loader\">\n    <div class=\"gears\">\n      <div class=\"largest-gear\"><span>&#9881;</span></div>\n      <div class=\"lg-gear\"><span>&#9881;</span></div>\n      <div class=\"sm-gear\"><span>&#9881;</span></div>\n    </div>\n  </div>\n</pre>\n");
  
});

this["Ember"]["TEMPLATES"]["nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"global-settings\">\n      <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("link.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'title': ("link.link_text")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.icon", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n      </a>\n    </div>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("link.classes")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("link.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'title': ("link.link_text")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.icon", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </a>\n    </li>\n  ");
  return buffer;
  }

  data.buffer.push("<a href=\"#\" class=\"logo\"></a>\n<div class=\"user-actions\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "link", "in", "view.bottom_links", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"global-logout\"><a href=\"/#/sign_out\"><i>&#59201;</i></a></div>\n</div>\n<ul>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "link", "in", "view.top_links", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["office"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header>\n  <section class=\"nav-bar\">\n    ");
  hashContexts = {'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0,'data-test': depth0,'class': depth0};
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING",'data-test': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SelectOffice", {hash:{
    'contentBinding': ("all"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content"),
    'selectionBinding': ("model"),
    'data-test': ("all"),
    'class': ("white-button office-select")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <button ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":blue-button :project-person-toggle showPeopleToggle:hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchToProjects", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Projects<i>&#59215;</i>\n    </button>\n    <button ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":blue-button :project-person-toggle showProjectsToggle:hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchToPeople", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> People<i>&#59215;</i>\n    </button>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.NavView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </section>\n  ");
  hashContexts = {'action': depth0,'resize': depth0};
  hashTypes = {'action': "STRING",'resize': "STRING"};
  options = {hash:{
    'action': ("selectDate"),
    'resize': ("resize")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['calendar-bar'] || depth0['calendar-bar']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "calendar-bar", options))));
  data.buffer.push("\n</header>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["people"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "person", "person", options) : helperMissing.call(depth0, "render", "person", "person", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<section id=\"peopleList\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "person", "in", "sortedPeople", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["person"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n  <article class=\"person\" ");
  hashContexts = {'data-person-id': depth0};
  hashTypes = {'data-person-id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-person-id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("personHeight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"person-allocations\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "allocation", "in", "currentAllocations", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers.view.call(depth0, "App.PersonEditView", {hash:{
    'class': ("person-descriptor")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </article>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "person_allocation", "allocation", options) : helperMissing.call(depth0, "render", "person_allocation", "allocation", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      <div class=\"person-controls\">\n        <a target=\"_blank\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  options = {hash:{
    'href': ("editUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("><i class=\"edit-person\" >&#9874;</i></a>\n        <i class=\"add-allocation\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAllocation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#10133;</i>\n      </div>\n    ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "App.PersonAllocationsView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["person_allocation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span class=\"allocation-identifier\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span>@");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentAllocated", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("%</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"allocation-content\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("hint")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "project", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPartial", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  <span class=\"allocation-range\">");
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

this["Ember"]["TEMPLATES"]["project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n  <article class=\"project\" ");
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
  data.buffer.push(">\n    <div class=\"project-allocations\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "allocation", "in", "currentAllocations", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers.view.call(depth0, "App.ProjectEditView", {hash:{
    'class': ("project-descriptor")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </article>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "allocation", "allocation", options) : helperMissing.call(depth0, "render", "allocation", "allocation", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      <div class=\"project-controls\">\n        <i class=\"edit-project\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editProject", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#9874;</i>\n        <i class=\"add-allocation\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAllocation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#10133;</i>\n      </div>\n    ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "App.ProjectAllocationsView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["projects"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "project.availableProject", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "availableProject", "project", options) : helperMissing.call(depth0, "render", "availableProject", "project", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "project.dummyProject", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "dummyProject", "project", options) : helperMissing.call(depth0, "render", "dummyProject", "project", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "project", "project", options) : helperMissing.call(depth0, "render", "project", "project", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<section id=\"projectList\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "project", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["projects/modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

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
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n          <div class=\"modal-office\" data-test=\"office\">\n            <label ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashContexts = {'type': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("isSelected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<span></span></label>\n          </div>\n        ");
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
  data.buffer.push("\n    <span class=\"close-x\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#10060;</span>\n  </div>\n  <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"modal-body\">\n      <div class=\"project-name\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.name:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Name</label>\n        ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.name", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <div class=\"billable project-modal\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.billable:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>");
  hashContexts = {'type': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("billable")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("Billable<span id=\"billable-check\"></span></label>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.billable", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <div class=\"notes\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.notes:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <label>Notes</label>\n        ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("notes")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.notes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <div class=\"dates\">\n        <div class=\"start\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.startDate:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          <i>&#128197;</i>\n          <label>Start Date</label>\n          ");
  hashContexts = {'name': depth0,'class': depth0,'value': depth0};
  hashTypes = {'name': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("startDate"),
    'class': ("start-date"),
    'value': ("formStartDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.startDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <span>-</span>\n        <div class=\"end\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("errors.end_date:error :field")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          <label>End Date</label>\n          ");
  hashContexts = {'name': depth0,'class': depth0,'value': depth0};
  hashTypes = {'name': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("endDate"),
    'class': ("end-date"),
    'value': ("formEndDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "msg", "in", "errors.endDate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"modal-offices\">\n        <label>Offices</label>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "offices", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"blue-button\" type=\"submit\" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'disabled': ("shouldDisableSubmit")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n      <button class=\"white-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSaving", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </form>\n</div>\n");
  return buffer;
  
});
(function() {
  var emberDebug;

  emberDebug = 'false' !== 'false';

  window.App = Ember.Application.create({
    LOG_TRANSITIONS: emberDebug,
    LOG_TRANSITIONS_INTERNAL: emberDebug,
    LOG_VIEW_LOOKUPS: emberDebug,
    LOG_ACTIVE_GENERATION: emberDebug
  });

  window.App.API_BASEURL = "http://t2.neo.com/api/v1";

  window.App.SIGN_IN_URL = "http://t2.neo.com/sign_in";

  window.App.SIGN_OUT_URL = "http://t2.neo.com/sign_out";

  window.App.NAVBAR_URL = "http://t2.neo.com/api/v1/navbar";

  window.App.PEOPLE_URL = "http://t2-people.herokuapp.com/#/people/";

  App.Store = DS.Store.extend();

}).call(this);

(function() {

  App.CalendarBarComponent = Ember.Component.extend({
    tagName: 'section',
    classNames: ['calendarBar'],
    isEditingDate: false,
    dateBinding: "App.projectsUI.date",
    daysInWindowBinding: "App.projectsUI.daysInWindow",
    firstDate: (function() {
      return moment(this.get("date")).format("MMMM D, YYYY");
    }).property("date"),
    didInsertElement: function() {
      return $(window).resize(function() {
        return Ember.run.debounce(this, function() {
          var days;
          days = App.projectsUI.calculateWindow();
          return App.projectsUI.set("daysInWindow", days);
        }, 300);
      });
    },
    dateRange: (function() {
      var date, dateArray, daysInWindow, i, monday;
      date = moment(this.get("date"));
      daysInWindow = this.get("daysInWindow");
      if (!date.isValid()) {
        date = moment();
      }
      dateArray = [];
      monday = moment(date);
      i = 0;
      while (i <= (daysInWindow / 7)) {
        dateArray.push(moment(monday).add("week", i).format("MMM D"));
        i++;
      }
      return dateArray;
    }).property("date", "daysInWindow"),
    dateRangeDidChange: (function() {
      return this.sendAction('resize');
    }).observes('dateRange'),
    actions: {
      editDate: function() {
        return this.set("isEditingDate", true);
      },
      confirmDate: function(dateValue) {
        if (!moment(dateValue).isValid()) {
          dateValue = this.get("date");
        }
        this.set("isEditingDate", false);
        return this.triggerAction({
          actionContext: dateValue
        });
      }
    }
  });

}).call(this);

(function() {

  App.ModalController = Em.ObjectController.extend({
    canDelete: null,
    _editedModel: null,
    edit: function(model) {
      this.set('canDelete', !model.get('isNew'));
      this.set('_editedModel', model);
      return this._initForm(model);
    },
    _initForm: function(editedModel) {},
    _applyChanges: function(editedModel) {},
    _beforeDelete: function(editedModel) {},
    _cancelChanges: function(editedModel) {
      if (editedModel.get('isNew') || !editedModel.get('isValid')) {
        return editedModel.deleteRecord();
      }
    },
    modelChanged: (function() {
      throw new Error("This controller should not use 'model'! We don't want the object to be autoupdated while editing. Use edit() instead");
    }).observes('model'),
    actions: {
      save: function() {
        var _this = this;
        if (this._editedModel.get('errors.length') > 0) {
          this._editedModel.send('becameValid');
        }
        this._applyChanges(this._editedModel);
        return this._editedModel.save().then((function() {
          return _this.send("closeModal");
        }), (function(error) {}));
      },
      "delete": function() {
        this._beforeDelete(this._editedModel);
        this._editedModel.destroyRecord();
        return this.send("closeModal");
      },
      close: function() {
        this._cancelChanges(this._editedModel);
        return this.send("closeModal");
      }
    },
    shouldDisableSubmit: (function() {
      return !this.get("isDirty");
    }).property("isDirty")
  });

}).call(this);

(function() {
  var EDITABLE_PROPERTIES, editableProps;

  EDITABLE_PROPERTIES = ['billable', 'binding', 'endDate', 'notes', 'person', 'project', 'slot', 'startDate', 'percentAllocated'];

  editableProps = EDITABLE_PROPERTIES.reduce(function(props, name) {
    props[name] = null;
    return props;
  }, {});

  App.AllocationsModalController = App.ModalController.extend(editableProps);

  App.AllocationsModalController.reopen({
    needs: ['office'],
    currentOffice: Ember.computed.alias('controllers.office.model'),
    isDirty: true,
    _initialProject: null,
    people: (function() {
      var office, people, project, sortByName, _i, _len, _ref;
      project = this.get('project');
      if (!project) {
        return [];
      }
      sortByName = {
        sortProperties: ['name'],
        content: []
      };
      people = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName);
      _ref = project.get('offices').toArray();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        office = _ref[_i];
        people.pushObjects(office.get('activePeople').toArray());
      }
      return people;
    }).property('project'),
    billableObserver: (function() {
      var project;
      project = this.get('project');
      if (!project) {
        return;
      }
      if (this._wasNew) {
        return this.set('billable', project.get('billable'));
      }
    }).observes('project'),
    bindingObserver: (function() {
      var project;
      project = this.get('project');
      if (!project) {
        return;
      }
      if (this._wasNew) {
        return this.set('binding', project.get('billable') || project.get('vacation'));
      }
    }).observes('project'),
    percentAllocatedObserver: (function() {
      var person;
      person = this.get('person');
      if (!person) {
        return;
      }
      if (this._wasNew) {
        return this.set('percentAllocated', person.get('percentBillable'));
      }
    }).observes('person'),
    startDateDidChange: (function() {
      var endDate, startDate;
      startDate = this.get('startDate');
      endDate = this.get('endDate');
      if (endDate && endDate < startDate) {
        return this.set('endDate', startDate);
      }
    }).observes('startDate'),
    formStartDate: (function(k, v) {
      if (arguments.length > 1) {
        this.set('startDate', moment(v));
      }
      return App.dateMunge(this.get('startDate'));
    }).property('startDate'),
    formEndDate: (function(k, v) {
      if (arguments.length > 1) {
        this.set('endDate', moment(v));
      }
      return App.dateMunge(this.get('endDate'));
    }).property('endDate'),
    projects: (function() {
      var projects, sortByName;
      projects = this.get('currentOffice.projects');
      sortByName = {
        sortProperties: ['sortOrder', 'name'],
        content: projects
      };
      return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName);
    }).property('currentOffice'),
    errors: (function() {
      return this._editedModel.get('errors');
    }).property('_editedModel.errors'),
    isNew: (function() {
      return this._editedModel.get('isNew');
    }).property('_editedModel'),
    _initForm: function(allocation) {
      var n, _i, _len, _results;
      this._wasNew = allocation.get('isNew');
      this._initialProject = allocation.get('project');
      this.set('project', null);
      _results = [];
      for (_i = 0, _len = EDITABLE_PROPERTIES.length; _i < _len; _i++) {
        n = EDITABLE_PROPERTIES[_i];
        _results.push(this.set(n, allocation.get(n)));
      }
      return _results;
    },
    _applyChanges: function(allocation) {
      var n, newProject, _i, _len;
      for (_i = 0, _len = EDITABLE_PROPERTIES.length; _i < _len; _i++) {
        n = EDITABLE_PROPERTIES[_i];
        allocation.set(n, this.get(n));
      }
      newProject = this.get('project');
      if (newProject !== this._initialProject || this._wasNew) {
        if (this._initialProject) {
          this._initialProject.get('allocations').removeObject(allocation);
        }
        if (newProject) {
          return newProject.get('allocations').pushObject(allocation);
        }
      }
    },
    _beforeDelete: function(allocation) {
      if (this._initialProject) {
        return this._initialProject.get('allocations').removeObject(allocation);
      }
    }
  });

}).call(this);

(function() {

  App.ApplicationController = Ember.Controller.extend({
    navUrl: (function() {
      return window.App.NAVBAR_URL;
    }).property()
  });

}).call(this);

(function() {
  var _redirectTo;

  _redirectTo = function(url) {
    var uri;
    uri = url;
    uri += "?return_url=" + escape(location.href);
    return location.href = uri;
  };

  App.AuthenticationController = Ember.ObjectController.extend({
    init: function() {
      return this.set('accessToken', localStorage.accessToken);
    },
    accessToken: null,
    isAuthenticated: Ember.computed.notEmpty('accessToken'),
    _redirectToSignIn: function() {
      return _redirectTo(App.SIGN_IN_URL);
    },
    _redirectToSignOut: function() {
      return _redirectTo(App.SIGN_OUT_URL);
    },
    extractAccessToken: function() {
      var match;
      match = location.href.match(/authentication_token=([a-zA-Z0-9_-]+)/);
      if (match) {
        this.set('accessToken', match[1]);
        return location.href = location.origin;
      }
    },
    login: function() {
      return this._redirectToSignIn();
    },
    logout: function() {
      this.set('accessToken', null);
      return this._redirectToSignOut();
    },
    accessTokenChanged: (function() {
      var token;
      token = this.get('accessToken');
      if (token) {
        return localStorage.accessToken = token;
      } else {
        return delete localStorage.accessToken;
      }
    }).observes("accessToken"),
    currentUser: (function() {
      var person;
      person = {};
      Ember.$.ajax({
        async: false,
        url: "" + App.API_BASEURL + "/profile.json",
        dataType: 'json',
        data: {},
        success: function(data) {
          return person = data.person;
        }
      });
      return person;
    }).property('accessToken')
  });

}).call(this);

(function() {

  App.OfficeController = Ember.ObjectController.extend({
    needs: ['application'],
    all: (function() {
      return this.store.all('office');
    }).property(),
    showPeopleToggle: (function() {
      return this.get('controllers.application.currentRouteName') === 'projects';
    }).property('controllers.application.currentRouteName'),
    showProjectsToggle: (function() {
      return this.get('controllers.application.currentRouteName') === 'people';
    }).property('controllers.application.currentRouteName'),
    modelChanged: (function() {
      var route;
      route = this.get('controllers.application.currentRouteName');
      if (!route) {
        return;
      }
      return this.transitionToRoute(route, this.get('model'));
    }).observes('model'),
    actions: {
      switchToPeople: function() {
        return this.transitionToRoute('people', App.projectsUI.get('date'), this.get('model.slug'));
      },
      switchToProjects: function() {
        return this.transitionToRoute('projects', App.projectsUI.get('date'), this.get('model.slug'));
      },
      selectDate: function(newDate) {
        var route;
        route = this.get('controllers.application.currentRouteName');
        return this.transitionToRoute(route, newDate, this.get('model.slug'));
      },
      resize: function() {
        var route;
        route = this.get('controllers.application.currentRouteName');
        return this.transitionToRoute(route, App.projectsUI.get('date'), this.get('model.slug'));
      }
    }
  });

}).call(this);

(function() {

  App.PeopleController = Ember.ArrayController.extend({
    needs: ['office'],
    office: Ember.computed.alias('controllers.office.model'),
    sortedPeople: (function() {
      var people, sortByName;
      people = this.get('model');
      sortByName = {
        sortProperties: ['sortOrder', 'name'],
        content: people
      };
      return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName);
    }).property('office', 'model')
  });

}).call(this);

(function() {

  App.PersonAllocationController = Ember.ObjectController.extend({
    needs: ['people'],
    office: Ember.computed.alias('project.office'),
    currentOffice: Ember.computed.alias('controllers.people.model'),
    isNonbilling: (function() {
      return !this.get('billable');
    }).property('billable'),
    isPartial: (function() {
      return this.get('percentAllocated') < 100;
    }).property('percentAllocated'),
    startOffset: (function() {
      var currentMonday, startDate;
      currentMonday = moment(App.projectsUI.get("date"));
      startDate = moment(this.get("startDate")) || moment();
      return startDate.diff(currentMonday, "days");
    }).property("App.projectsUI.date", "startDate"),
    hint: (function() {
      return "" + (this.get('project.name'));
    }).property('office', 'person'),
    style: (function() {
      var duration, scale, startOffset;
      scale = 16;
      startOffset = this.get("startOffset");
      duration = this.get("duration");
      if (startOffset < 0) {
        duration += startOffset;
        startOffset = 0;
      }
      return "top: " + (this.get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; ";
    }).property("startOffset", "duration", "track")
  });

}).call(this);

(function() {

  App.PersonController = Ember.ObjectController.extend({
    needs: ['people'],
    currentOffice: Ember.computed.alias('controllers.people.model'),
    content: null,
    trackCount: 0,
    selectedAllocations: (function() {
      return this.get('allocations');
    }).property("currentOffice", "allocations.[]", "allocations.@each.current"),
    currentAllocations: (function() {
      var allocations, trackNo;
      allocations = this.get("selectedAllocations").filterProperty("current");
      trackNo = 0;
      App.group_by_sorted_project(allocations, function(allocs, person) {
        allocs.forEach(function(alloc) {
          return alloc.set("track", trackNo);
        });
        return trackNo++;
      });
      this.set("trackCount", trackNo);
      return allocations;
    }).property("selectedAllocations"),
    personHeight: (function() {
      return "height: " + (this.get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;";
    }).property("trackCount"),
    actions: {
      addAllocation: function(startDate) {
        startDate || (startDate = moment());
        return this.send('createAllocation', {
          person: this.get('model'),
          startDate: startDate
        });
      }
    }
  });

}).call(this);

(function() {

  App.AllocationController = Ember.ObjectController.extend({
    needs: ['projects', 'office'],
    office: Ember.computed.alias('person.office'),
    currentOffice: Ember.computed.alias('controllers.office.model'),
    isExternal: (function() {
      return this.get('office') !== this.get('currentOffice');
    }).property('currentOffice', 'office'),
    isNonbilling: (function() {
      return !this.get('billable');
    }).property('billable'),
    isPartial: (function() {
      return this.get('percentAllocated') < 100;
    }).property('percentAllocated'),
    startOffset: (function() {
      var currentMonday, startDate;
      currentMonday = moment(App.projectsUI.get("date"));
      startDate = moment(App.dateMunge(this.get('startDate')));
      return startDate.diff(currentMonday, "days");
    }).property("App.projectsUI.date", "startDate"),
    hint: (function() {
      var _external;
      _external = this.get('isExternal') ? " (" + (this.get('office.name')) + ")" : '';
      return "" + (this.get('person.name')) + _external;
    }).property('office', 'isExternal', 'person'),
    style: (function() {
      var duration, scale, startOffset;
      scale = 16;
      startOffset = this.get("startOffset");
      duration = this.get("duration");
      if (startOffset < 0) {
        duration += startOffset;
        startOffset = 0;
      }
      return "top: " + (this.get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; ";
    }).property("startOffset", "duration", "track")
  });

}).call(this);

(function() {

  App.AvailabilityController = Ember.ObjectController.extend({
    isExternal: (function() {
      return false;
    }).property(),
    isPartial: (function() {
      return this.get('percentAllocated') < 100;
    }).property('percentAllocated'),
    startOffset: (function() {
      var currentMonday, startDate;
      currentMonday = moment(App.projectsUI.get("date"));
      startDate = moment(this.get("startDate")) || moment();
      return startDate.diff(currentMonday, "days");
    }).property("App.projectsUI.date", "startDate"),
    hint: (function() {
      var _external;
      _external = this.get('isExternal') ? " (" + (this.get('office.name')) + ")" : '';
      return "" + (this.get('person.name')) + _external;
    }).property('office', 'isExternal', 'person'),
    style: (function() {
      var duration, scale, startOffset;
      scale = 16;
      startOffset = this.get("startOffset");
      duration = this.get("duration");
      if (startOffset < 0) {
        duration += startOffset;
        startOffset = 0;
      }
      return "top: " + (this.get("track") * App.ALLOCATION_HEIGHT) + "px; " + "left: " + (startOffset * App.WIDTH_OF_DAY) + "px; " + "width: " + (duration * App.WIDTH_OF_DAY) + "px; ";
    }).property("startOffset", "duration", "track")
  });

}).call(this);

(function() {

  App.AvailableProjectController = Ember.ObjectController.extend({
    needs: ['application', 'projects', 'office'],
    trackCount: 0,
    projectHeight: (function() {
      return "height: " + (this.get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;";
    }).property("trackCount"),
    currentAvailabilities: (function() {
      var availabilities, trackNo;
      availabilities = this.get("availabilities");
      trackNo = 0;
      App.group_by_sorted_name(availabilities, function(avs, person) {
        avs.forEach(function(av) {
          return av.set("track", trackNo);
        });
        return trackNo++;
      });
      this.set("trackCount", trackNo);
      return availabilities;
    }).property('availabilities.[]'),
    availabilityStart: (function() {
      return moment(App.projectsUI.get('startDate')).format("YYYY-MM-DD");
    }).property('App.projectsUI.startDate'),
    availabilityEnd: (function() {
      return moment(App.projectsUI.get('endDate')).format("YYYY-MM-DD");
    }).property('App.projectsUI.endDate'),
    availabilities: (function() {
      var criteria;
      criteria = {
        start_date: this.get('availabilityStart'),
        office_id: this.get('controllers.office.model.id'),
        end_date: this.get('availabilityEnd')
      };
      return this.store.find('availability', criteria);
    }).property('controllers.office.model', 'availabilityStart', 'availabilityEnd', 'App.projectsUI.allocationUpdates'),
    actions: {
      addAllocation: function() {
        return this.send('createAllocation', {});
      }
    }
  });

}).call(this);

(function() {

  App.DummyProjectController = Ember.ObjectController.extend({
    needs: ['application', 'projects'],
    trackCount: 1,
    projectHeight: (function() {
      return "height: " + (this.get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;";
    }).property("trackCount")
  });

}).call(this);

(function() {

  App.ProjectController = Ember.ObjectController.extend({
    needs: ['office'],
    currentOffice: Ember.computed.alias('controllers.office.model'),
    content: null,
    trackCount: 0,
    selectedAllocations: (function() {
      var allocations;
      allocations = this.get('allocations');
      if (this.get('vacation')) {
        return allocations.filterBy('person.office.id', this.get('currentOffice.id'));
      } else {
        return allocations;
      }
    }).property("currentOffice", "allocations.[]", "allocations.@each.current"),
    currentAllocations: (function() {
      var allocations, trackNo;
      allocations = this.get("selectedAllocations").filterProperty("current");
      trackNo = 0;
      App.group_by_sorted_name(allocations, function(allocs, person) {
        allocs.forEach(function(alloc) {
          return alloc.set("track", trackNo);
        });
        return trackNo++;
      });
      this.set("trackCount", trackNo);
      return allocations;
    }).property("selectedAllocations"),
    projectHeight: (function() {
      return "height: " + (this.get("trackCount") * App.ALLOCATION_HEIGHT + 1) + "px;";
    }).property("trackCount"),
    actions: {
      addAllocation: function(startDate) {
        startDate || (startDate = moment());
        return this.send('createAllocation', {
          project: this.get('model'),
          startDate: startDate
        });
      }
    }
  });

}).call(this);

(function() {

  App.ProjectsController = Ember.ArrayController.extend();

}).call(this);

(function() {
  var EDITABLE_PROPERTIES, editableProps;

  App.SelectableOffice = Ember.ObjectProxy.extend({
    selected: [],
    isSelected: (function(key, value) {
      var office;
      office = this.get('content');
      if (value !== void 0) {
        if (value) {
          this.selected.add(office);
        } else {
          this.selected.remove(office);
        }
      }
      return this.selected.contains(office);
    }).property('selected.[]')
  });

  EDITABLE_PROPERTIES = ['name', 'billable', 'notes', 'startDate', 'endDate'];

  editableProps = EDITABLE_PROPERTIES.reduce(function(props, name) {
    props[name] = null;
    return props;
  }, {});

  App.ProjectsModalController = App.ModalController.extend(editableProps);

  App.ProjectsModalController.reopen({
    isDirty: true,
    availableOffices: [],
    _selectedOffices: Ember.Set.create(),
    _initForm: function(project) {
      var n, _i, _len;
      for (_i = 0, _len = EDITABLE_PROPERTIES.length; _i < _len; _i++) {
        n = EDITABLE_PROPERTIES[_i];
        this.set(n, project.get(n));
      }
      return this._initSelectedOffices(project);
    },
    _initSelectedOffices: function(project) {
      var selected;
      selected = this._selectedOffices;
      selected.clear();
      return selected.addEach(project.get('offices'));
    },
    _updateOffices: function(project) {
      var offices;
      offices = project.get('offices');
      offices.clear();
      return this._selectedOffices.forEach(function(selected) {
        return offices.pushObject(selected);
      });
    },
    _applyChanges: function(project) {
      var n, _i, _len;
      for (_i = 0, _len = EDITABLE_PROPERTIES.length; _i < _len; _i++) {
        n = EDITABLE_PROPERTIES[_i];
        project.set(n, this.get(n));
      }
      return this._updateOffices(project);
    },
    _beforeDelete: function(project) {
      return this._removeFromItsOffices(project);
    },
    formStartDate: (function(k, v) {
      var value;
      if (arguments.length > 1) {
        this.set('startDate', moment(v));
      }
      value = this.get('startDate');
      if (value) {
        return App.dateMunge(value);
      }
    }).property('startDate'),
    formEndDate: (function(k, v) {
      var value;
      if (arguments.length > 1) {
        this.set('endDate', moment(v));
      }
      value = this.get('endDate');
      if (value) {
        return App.dateMunge(value);
      }
    }).property('endDate'),
    offices: (function() {
      var self;
      self = this;
      return this.get("availableOffices").map(function(office) {
        return App.SelectableOffice.create({
          selected: self._selectedOffices,
          content: office
        });
      });
    }).property("availableOffices.@each")
  });

}).call(this);

(function() {

  App.QuickLookModalController = Ember.ObjectController.extend({
    actions: {
      close: function() {
        return this.send("closeQuickLook");
      },
      edit: function() {
        var _this = this;
        this.send("closeQuickLook");
        return Ember.run.later(this, (function() {
          return _this.send("editAllocation", _this.get("model"));
        }), 200);
      }
    },
    billableStatus: (function() {
      if (this.get('billable')) {
        return "Billable";
      } else {
        return "Non-billing";
      }
    }).property("billable"),
    bindingStatus: (function() {
      if (this.get('binding')) {
        return "Exclusive";
      } else {
        return "Non-exclusive";
      }
    }).property("binding"),
    startDate: (function() {
      return moment(this.get('model.startDate')).format("MMM DD");
    }).property('model.startDate'),
    endDate: (function() {
      return moment(this.get('model.endDate')).format("MMM DD");
    }).property('model.endDate')
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

  App.clickedDate = function(xPosition) {
    var currentMonday, dayOffset;
    dayOffset = Math.floor((xPosition - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY);
    currentMonday = moment(App.projectsUI.get("date"));
    return moment(currentMonday).add("days", dayOffset).format("YYYY-MM-DD");
  };

}).call(this);

(function() {

  App.computed = {};

  App.computed.fmtDate = function(key) {
    return Ember.computed(key, function() {
      return moment(this.get(key)).format('YYYY-MM-DD');
    });
  };

  App.DateField = Ember.TextField.extend({
    type: "date",
    date: (function(key, date) {
      var value;
      if (date) {
        this.set("value", moment(date).format('YYYY-MM-DD'));
      } else {
        value = this.get("value");
        if (value) {
          date = moment(value);
        } else {
          date = null;
        }
      }
      return date;
    }).property("value")
  });

}).call(this);

(function() {

  Ember.Handlebars.helper("shortDate", function(unformatted_date) {
    return moment(unformatted_date).format('MMM D');
  });

}).call(this);

(function() {

  App.DateUI = Ember.Object.extend({
    date: null,
    startDate: (function() {
      return moment(this.date);
    }).property("date"),
    endDate: (function() {
      return moment(this.get('date')).add("days", this.get('daysInWindow'));
    }).property("date", "daysInWindow"),
    calculateWindow: (function() {
      return Math.ceil((window.innerWidth - App.WIDTH_OF_DESCRIPTOR) / App.WIDTH_OF_DAY);
    }),
    allocationUpdates: 0,
    init: function() {
      this._super();
      return this.set('daysInWindow', this.calculateWindow());
    }
  });

  App.projectsUI = App.DateUI.create({
    date: moment().startOf("week").add('d', 1).format("YYYY-MM-DD")
  });

}).call(this);

(function() {

  Ember.Application.initializer({
    name: 'ajaxInitializer',
    initialize: function(container, application) {
      $.ajaxSetup({
        beforeSend: function(xhr) {
          var auth;
          auth = container.lookup("controller:authentication");
          xhr.setRequestHeader("Authorization", auth.get('accessToken'));
          return xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest");
        }
      });
      return $(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
        var auth;
        if (!jqXHR.getAllResponseHeaders()) {
          return;
        }
        if (jqXHR.status === 422) {
          return;
        }
        debugger;
        auth = container.lookup("controller:authentication");
        return auth.logout();
      });
    }
  });

}).call(this);

(function() {

  App.Allocation = DS.Model.extend({
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    project: DS.belongsTo('project'),
    person: DS.belongsTo('person'),
    billable: DS.attr('boolean'),
    binding: DS.attr('boolean'),
    notes: DS.attr('string'),
    person: DS.belongsTo('person'),
    project: DS.belongsTo('project'),
    slot: DS.belongsTo('slot'),
    percentAllocated: DS.attr('number'),
    init: function() {
      this._super();
      this.on('didDelete', this, this.pokeAllocations);
      this.on('didCreate', this, this.pokeAllocations);
      return this.on('didUpdate', this, this.pokeAllocations);
    },
    pokeAllocations: function() {
      return App.projectsUI.incrementProperty('allocationUpdates');
    },
    track: 0,
    current: (function() {
      return this.get("startDate") <= App.projectsUI.get("endDate") && this.get("endDate") >= App.projectsUI.get("startDate");
    }).property("startDate", "endDate", "App.projectsUI.startDate", "App.projectsUI.endDate"),
    duration: (function() {
      var end, start;
      start = moment(this.get("startDate")) || moment(this.get("endDate")) || moment();
      end = moment(this.get("endDate")) || moment(this.get("startDate")) || moment();
      return end.diff(start, "days") + 1;
    }).property("startDate", "endDate")
  });

}).call(this);

(function() {

  App.AllocationBundle = DS.Model.extend({
    projects: DS.hasMany('project'),
    offices: DS.hasMany('office'),
    people: DS.hasMany('person'),
    allocations: DS.hasMany('allocation')
  });

}).call(this);

(function() {

  App.Availability = DS.Model.extend({
    url: "" + App.API_BASEURL + "/availabilities",
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    duration: (function() {
      var end, start;
      start = moment(this.get("startDate")) || moment(this.get("endDate")) || moment();
      end = moment(this.get("endDate")) || moment(this.get("startDate")) || moment();
      return end.diff(start, "days") + 1;
    }).property("startDate", "endDate"),
    person: DS.belongsTo('person'),
    percentAllocated: DS.attr('number'),
    current: true
  });

}).call(this);

(function() {

  App.Office = DS.Model.extend({
    name: DS.attr('string'),
    projects: DS.hasMany('project'),
    notes: DS.attr('string'),
    people: DS.hasMany('person'),
    activePeople: (function() {
      var cutoff;
      cutoff = App.projectsUI.get('startDate');
      return this.get('people').filter(function(item) {
        var date;
        date = item.get('endDate');
        return !date || date > cutoff;
      });
    }).property('App.projectsUI.startDate'),
    slug: (function() {
      return this.get('name').replace(/\s+/, '-').toLowerCase();
    }).property('name')
  });

}).call(this);

(function() {
  var attr;

  attr = DS.attr;

  App.Person = DS.Model.extend({
    name: attr('string'),
    role: attr('string'),
    notes: attr('string'),
    email: attr('string'),
    unsellable: attr('boolean'),
    startDate: attr('date'),
    endDate: attr('date'),
    office: DS.belongsTo('office'),
    allocations: DS.hasMany('allocation'),
    percentBillable: DS.attr('number'),
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
    }).property("App.projectsUI.startDate", "App.projectsUI.endDate", 'allocations.[]', 'allocations.@each.current'),
    editUrl: (function() {
      return App.PEOPLE_URL + this.get('id') + '/edit';
    }).property()
  });

}).call(this);

(function() {

  App.Project = DS.Model.extend({
    name: DS.attr('string'),
    vacation: DS.attr('boolean'),
    billable: DS.attr('boolean'),
    offices: DS.hasMany('office'),
    slots: DS.hasMany('slot'),
    allocations: DS.hasMany('allocation'),
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    sortOrder: (function() {
      var val;
      val = 0;
      if (!this.get('billable')) {
        val += 1;
      }
      if (this.get('vacation')) {
        val += 2;
      }
      return val;
    }).property('billable', 'vacation')
  });

  App.AvailableProject = App.Project.extend({
    availableProject: true,
    sortOrder: 4
  });

  App.DummyProject = App.Project.extend({
    dummyProject: true,
    sortOrder: -1
  });

}).call(this);

(function() {

  App.Slot = DS.Model.extend({
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    project: DS.belongsTo('project'),
    allocations: DS.hasMany('allocation')
  });

}).call(this);

(function() {

  App.Router.map(function() {
    this.route('sign_out');
    return this.resource('bundle', {
      path: ':startDate'
    }, function() {
      return this.resource('office', {
        path: 'offices/:slug'
      }, function() {
        this.resource('projects');
        return this.resource('people');
      });
    });
  });

  App.IndexRoute = Ember.Route.extend({
    afterModel: function(model, transition) {
      var office_slug;
      office_slug = this.controllerFor('authentication').get('currentUser').office_slug;
      return this.transitionTo('projects', moment().format("YYYY-MM-DD"), office_slug);
    }
  });

}).call(this);

(function() {

  App.ApplicationRoute = Ember.Route.extend({
    beforeModel: function(transition) {
      var auth;
      auth = this.controllerFor('authentication');
      auth.extractAccessToken();
      if (!auth.get('isAuthenticated')) {
        transition.abort();
        return auth.login();
      }
    },
    actions: {
      createAllocation: function(allocationAttrs) {
        var defaults;
        if (allocationAttrs == null) {
          allocationAttrs = {};
        }
        defaults = {
          startDate: moment(),
          endDate: moment().add(2, 'weeks').format('YYYY-MM-DD')
        };
        return this.send('editAllocation', this.store.createRecord('allocation', Ember.merge(defaults, allocationAttrs)));
      },
      editAllocation: function(allocation) {
        this.controllerFor("allocations.modal").edit(allocation);
        return this.send("openModal", "allocations.modal");
      },
      quickView: function(allocation) {
        return this.send("quickViewModal", allocation);
      },
      quickViewModal: function(allocation) {
        this.controllerFor("QuickLookModal").set("model", allocation);
        return this.render("allocations/quick_look_modal", {
          into: "application",
          outlet: "quickLook",
          view: "QuickLookModal",
          controller: "QuickLookModal"
        });
      },
      close: function(modal) {
        return this.send("closeModal");
      },
      error: function(err) {
        var auth;
        auth = this.controllerFor('authentication');
        debugger;
        return auth.login();
      },
      openModal: function(modal) {
        return this.render(modal, {
          into: "application",
          outlet: "modal"
        });
      },
      closeModal: function() {
        var self,
          _this = this;
        self = this;
        return App.animateModalClose().then(function() {
          return _this.disconnectOutlet({
            outlet: "modal",
            parentView: "application"
          });
        });
      },
      closeQuickLook: function() {
        var self,
          _this = this;
        self = this;
        return App.animateModalClose().then(function() {
          return _this.disconnectOutlet({
            outlet: "quickLook",
            parentView: "application"
          });
        });
      },
      loading: function() {
        var view,
          _this = this;
        if (!this.get('loadingView')) {
          view = this.container.lookup('view:loading').append();
          this.set('loadingView', view);
        }
        return this.router.one('didTransition', function() {
          return _this.get('loadingView').destroy();
        });
      }
    }
  });

}).call(this);

(function() {

  App.BundleRoute = Ember.Route.extend({
    model: function(params) {
      var monday, startDate;
      startDate = params.startDate;
      monday = moment(startDate).startOf("week").add("d", 1);
      App.projectsUI.set('date', monday.format("YYYY-MM-DD"));
      return this.store.find('allocationBundle', {
        start_date: this.get('startDate'),
        end_date: this.get('endDate')
      });
    },
    serialize: function(model) {
      return {
        startDate: this.get('startDate')
      };
    },
    startDate: (function() {
      return moment(App.projectsUI.get('startDate')).format("YYYY-MM-DD");
    }).property('App.projectsUI.startDate'),
    endDate: (function() {
      return moment(App.projectsUI.get('endDate')).format("YYYY-MM-DD");
    }).property('App.projectsUI.endDate')
  });

}).call(this);

(function() {

  App.OfficeRoute = Ember.Route.extend({
    model: function(params) {
      var offices;
      offices = this.store.all('allocationBundle').get('firstObject.offices');
      return offices.findProperty('slug', params.slug);
    },
    serialize: function(model) {
      return {
        slug: model.get('slug')
      };
    }
  });

}).call(this);

(function() {

  App.PeopleRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('office').get('activePeople');
    }
  });

}).call(this);

(function() {

  App.ProjectsRoute = Ember.Route.extend({
    model: function() {
      var availableProject, dummyProject, office, projects, sortByName;
      office = this.modelFor('office');
      projects = office.get('projects');
      if (!projects.findBy('dummyProject', true)) {
        dummyProject = this.store.createRecord('dummyProject');
        projects.pushObject(dummyProject);
      }
      if (!projects.findBy('name', 'Available')) {
        availableProject = this.store.createRecord('availableProject', {
          people: office.get('people'),
          office: office,
          name: "Available"
        });
        projects.pushObject(availableProject);
      }
      sortByName = {
        sortProperties: ['sortOrder', 'name'],
        content: projects
      };
      return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, sortByName);
    },
    actions: {
      createProject: function() {
        return this.send('editProject', this.store.createRecord('project'));
      },
      editProject: function(project) {
        this.controllerFor("projects.modal").set("availableOffices", this.controllerFor('office').get('all'));
        this.controllerFor("projects.modal").edit(project);
        return this.send("openModal", "projects.modal");
      }
    }
  });

}).call(this);

(function() {

  App.SignOutRoute = Ember.Route.extend({
    redirect: function() {
      var auth;
      auth = this.controllerFor('authentication');
      return auth.logout();
    }
  });

}).call(this);

(function() {

  App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: App.API_BASEURL
  });

  App.ApplicationSerializer = DS.ActiveModelSerializer.extend();

  App.PersonAdapter = App.ApplicationAdapter.extend({
    ajaxOptions: function(url, type, hash) {
      var result, savedData, _ref;
      if ((hash != null ? (_ref = hash.data) != null ? _ref.formData : void 0 : void 0) != null) {
        savedData = hash.data.formData;
        hash.data = {};
        result = this._super(url, type, hash);
        result.contentType = false;
        result.processData = false;
        result.data = savedData;
        return result;
      } else {
        return this._super(url, type, hash);
      }
    }
  });

  App.PersonSerializer = App.ApplicationSerializer.extend({
    serializeIntoHash: function(data, type, record) {
      return data.formData = record.formData(this.serialize(record));
    }
  });

  App.AvailabilitySerializer = App.ApplicationSerializer.extend({
    extractArray: function(store, type, payload, requestType) {
      payload.availabilities.forEach(function(item) {
        return item.id = item.start_date + item.end_date + item.person_id;
      });
      return this._super(store, type, payload, requestType);
    }
  });

  App.ProjectSerializer = App.ApplicationSerializer.extend({
    serializeHasMany: function(record, json, relationship) {
      var key;
      key = relationship.key;
      if (key === "offices") {
        return json[this.keyForRelationship(key, relationship.kind)] = Ember.get(record, key).mapBy('id');
      } else {
        return this._super();
      }
    }
  });

  App.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
      return serialized;
    },
    serialize: function(deserialized) {
      return deserialized;
    }
  });

  App.DateTransform = DS.Transform.extend({
    deserialize: function(string) {
      if (!string) {
        return null;
      } else {
        return moment(string);
      }
    },
    serialize: function(date) {
      if (!date) {
        return null;
      }
      return moment(date).format('YYYY-MM-DD');
    }
  });

}).call(this);

(function() {

  App.dateMunge = function(date) {
    return moment(date).format('YYYY-MM-DD');
  };

}).call(this);

(function() {

  App.group_by_sorted_name = function(array, callback) {
    var people, people_with_data;
    people_with_data = {};
    array.reduce((function(acc, item) {
      var name;
      name = item.get('person.name');
      if (acc[name]) {
        acc[name].push(item);
      } else {
        acc[name] = [item];
      }
      return acc;
    }), people_with_data);
    people = Ember.keys(people_with_data).sort();
    return people.forEach(function(person) {
      var data;
      data = people_with_data[person];
      return callback.call(null, data, person);
    });
  };

}).call(this);

(function() {

  App.group_by_sorted_project = function(array, callback) {
    var projects, projects_with_data;
    projects_with_data = {};
    array.reduce((function(acc, item) {
      var name;
      name = item.get('project.name');
      if (acc[name]) {
        acc[name].push(item);
      } else {
        acc[name] = [item];
      }
      return acc;
    }), projects_with_data);
    projects = Ember.keys(projects_with_data).sort();
    return projects.forEach(function(project) {
      var data;
      data = projects_with_data[project];
      return callback.call(null, data, project);
    });
  };

}).call(this);

(function() {

  App.animateModalClose = function() {
    var deferred;
    deferred = Ember.RSVP.defer();
    $(".modal").removeClass("in");
    $(".modal-backdrop").removeClass("in");
    setTimeout((function() {
      return deferred.resolve();
    }), App.DEFAULT_CSS_TRANSITION_DURATION_MS);
    return deferred.promise;
  };

  App.animateModalOpen = function() {
    var deferred;
    deferred = Ember.RSVP.defer();
    $(".modal-backdrop").addClass("in");
    $(".modal").addClass("in");
    setTimeout((function() {
      return deferred.resolve("ok");
    }), App.DEFAULT_CSS_TRANSITION_DURATION_MS);
    return deferred.promise;
  };

}).call(this);

(function() {

  App.AllocationView = Ember.View.extend({
    attributeBindings: ['style'],
    styleBinding: "controller.style",
    classNames: ['allocation'],
    classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling'],
    isExternal: Ember.computed.alias('controller.isExternal'),
    isNonbilling: Ember.computed.alias('controller.isNonbilling'),
    allocation: Ember.computed.alias('controller.model'),
    clicks: [],
    click: function(evt) {
      this.clicks.push(Ember.run.later(this, function() {
        return this.get('controller').send('quickView', this.get('allocation'));
      }, 250));
      return false;
    },
    doubleClick: function(evt) {
      this.clicks.map(function(click) {
        return Ember.run.cancel(click);
      });
      this.clicks = [];
      this.get('controller').send('editAllocation', this.get('allocation'));
      return false;
    }
  });

}).call(this);

(function() {

  App.AvailabilityView = Ember.View.extend({
    attributeBindings: ['style'],
    styleBinding: "controller.style",
    classNames: ['allocation', 'available'],
    classNameBindings: ['isExternal:external'],
    isExternal: Ember.computed.alias('controller.isExternal'),
    allocation: Ember.computed.alias('controller.model'),
    doubleClick: function(evt) {
      var allocationInfo;
      allocationInfo = {
        startDate: this.get('allocation.startDate'),
        endDate: this.get('allocation.endDate'),
        person: this.get('allocation.person')
      };
      this.get('controller').send('createAllocation', allocationInfo);
      return false;
    }
  });

}).call(this);

(function() {

  App.DatePickerView = Ember.TextField.extend({
    focusIn: function(event) {
      return this.$().datepicker({
        dateFormat: "yy-mm-dd"
      });
    }
  });

  Ember.Handlebars.helper('date-picker', App.DatePickerView);

}).call(this);

(function() {

  App.EditDateView = Ember.TextField.extend({
    didInsertElement: function() {
      return this.$().focus();
    },
    focusIn: function(event) {
      var self;
      self = this;
      this.set("value", moment(App.projectsUI.get("date")).format("YYYY-MM-DD"));
      return this.$().datepicker({
        dateFormat: "yy-mm-dd",
        onClose: function(date) {
          return self.triggerAction({
            actionContext: date
          });
        }
      });
    }
  });

  Ember.Handlebars.helper('edit-date', App.EditDateView);

}).call(this);

(function() {

  App.LoadingView = Ember.View.extend({
    templateName: "loading"
  });

}).call(this);

(function() {

  App.ModalView = Em.View.extend({
    layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),
    didInsertElement: function() {
      var offset, self, viewportHeight;
      self = this;
      Ember.run.later(this, function() {
        $(".modal-backdrop").addClass("in");
        return $(".modal").addClass("in");
      }, 1);
      offset = $(document).scrollTop();
      viewportHeight = $(window).height();
      $(".modal").css('top', (offset + (viewportHeight / 2)) - ($(".modal").outerHeight() / 2));
      $("body").on("keyup.modal", function(event) {
        if (event.keyCode === 27) {
          return self.get("controller").send("close");
        }
      });
      return this.$("input[type=text]").first();
    },
    willDestroyElement: function() {
      return $("body").off("keyup.modal");
    }
  });

  App.ProjectsModalView = App.ModalView.extend();

  App.AllocationsModalView = App.ModalView.extend();

  App.ConfirmDeleteView = App.ModalView.extend();

  App.QuickLookModalView = App.ModalView.extend();

}).call(this);

(function() {

  App.NavView = Ember.View.extend({
    tagName: 'nav',
    templateName: 'nav',
    top_links: null,
    bottom_links: null,
    didInsertElement: function() {
      var self, url;
      url = window.App.NAVBAR_URL;
      self = this;
      return $.getJSON(url, {}, function(data, status, xhr) {
        var current_link, top_links;
        top_links = Ember.ArrayProxy.create({
          content: data.top
        });
        current_link = top_links.find(function(item) {
          return !!item.url.match(new RegExp(window.location.origin));
        });
        if (!current_link) {
          current_link = top_links.get('firstObject');
        }
        if (!current_link.classes) {
          current_link.classes = '';
        }
        current_link.classes += ' selected-application';
        self.set('top_links', top_links);
        return self.set('bottom_links', Ember.ArrayProxy.create({
          content: data.bottom
        }));
      });
    }
  });

}).call(this);

(function() {

  App.PersonAllocationView = Ember.View.extend({
    attributeBindings: ['style'],
    styleBinding: "controller.style",
    classNames: ['allocation'],
    classNameBindings: ['isExternal:external', 'isNonbilling:nonbilling'],
    isExternal: Ember.computed.alias('controller.isExternal'),
    isNonbilling: Ember.computed.alias('controller.isNonbilling'),
    allocation: Ember.computed.alias('controller.model'),
    clicks: [],
    click: function(evt) {
      this.clicks.push(Ember.run.later(this, function() {
        return this.get('controller').send('quickView', this.get('allocation'));
      }, 250));
      return false;
    },
    doubleClick: function(evt) {
      this.clicks.map(function(click) {
        return Ember.run.cancel(click);
      });
      this.clicks = [];
      this.get('controller').send('editAllocation', this.get('allocation'));
      return false;
    }
  });

}).call(this);

(function() {

  App.PersonAllocationsView = Ember.View.extend({
    doubleClick: function(evt) {
      var newStartDate;
      newStartDate = App.clickedDate(evt.clientX);
      return this.get('controller').send('addAllocation', newStartDate);
    }
  });

}).call(this);

(function() {

  App.PersonEditView = Ember.View.extend({
    classNameBindings: ['hover'],
    hover: false,
    doubleClick: function(evt) {
      var person;
      person = this.get('controller').get('model');
      this.get('controller').send('editPerson', person);
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

  App.ProjectAllocationsView = Ember.View.extend({
    doubleClick: function(evt) {
      var newStartDate;
      newStartDate = App.clickedDate(evt.clientX);
      return this.get('controller').send('addAllocation', newStartDate);
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

}).call(this);

(function() {

  App.SelectOffice = Ember.Select.extend({
    attributeBindings: ['data-test']
  });

}).call(this);
