<div class="modal">
  <div class="modal-header">
    {{#if isNew}}
      Create Allocation
    {{else}}
      Editing Allocation
    {{/if}}
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>
  <div class="modal-body">
    <div class="modal-project" {{bindAttr class="errors.project:error :field"}}>
      <i>&#128710;</i>
      <label>Project</label>
      {{view Ember.Select class="white-button" contentBinding="projects"
                          optionLabelPath="content.name"
                          optionValuePath="content"
                          valueBinding="project"
                          selectionBinding="project"
                          prompt="Select a project"}}
      {{#each msg in errors.project}}{{msg}}{{/each}}
    </div>
    <div class="modal-person" {{bindAttr class="errors.person:error :field"}}>
      <i>&#128100;</i>
      <label>Person</label>
      {{view Ember.Select class="white-button" contentBinding="people"
                          optionLabelPath="content.name"
                          optionValuePath="content"
                          valueBinding="person"
                          selectionBinding="person"
                          prompt="Select a name"}}
      {{#each msg in errors.person}}{{msg}}{{/each}}
    </div>
  <form {{action save on="submit"}}>
    <div class="dates">
      <div class="start" {{bindAttr class="errors.startDate:error :field"}}>
        <i>&#128197;</i>
        <label>Start Date</label>
        {{date-picker name="startDate" class="start-date" value=formStartDate}}
        {{#each msg in errors.startDate}}{{msg}}{{/each}}
      </div>
      <span>-</span>
      <div class="end" {{bindAttr class="errors.end_date:error :field"}}>
        <label>End Date</label>
        {{date-picker name="endDate" class="end-date" value=formEndDate}}
        {{#each msg in errors.endDate}}{{msg}}{{/each}}
      </div>
    </div>
    <div class="options">
      <div class="billable" data-test="billable" {{bindAttr class="errors.billable:error :field" }} >
        <label>{{input type="checkbox" checked=billable}}Billable<span id="billable-check"></span></label>
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div class="exclusive" data-test="binding" {{bindAttr class="errors.binding:error :field"}}>
        <label>{{input type="checkbox" checked=binding}}Exclusive<span id="binding-check"></span></label>
        {{#each msg in errors.binding}}{{msg}}{{/each}}
      </div>
    </div>
    <div class="percent-allocated" {{bindAttr class="errors.binding:error :field"}}>
      <i>&#9716;</i>
      <label>% Allocated{{input type="text" value=percentAllocated }}</label>
      {{#each msg in errors.percentAllocated}}{{msg}}{{/each}}
    </div>
    <div class="notes" data-test="notes" {{bindAttr class="errors.notes:error :field"}}>
      <i>&#9998;</i>
      <label>Notes</label>
      {{view Ember.TextArea valueBinding="notes"}}
      {{#each msg in errors.notes}}{{msg}}{{/each}}
    </div>
  </div>
  <div class="modal-footer">
    <button class="blue-button" type="submit" {{bindAttr disabled="shouldDisableSubmit"}}>Save</button>
    <button class="white-button" {{action close}}>Cancel</button>
    {{#if canDelete}}
      <a href="#" class="delete" {{action delete}}>Delete</a>
    {{/if}}
    {{#if isSaving}}
      Saving...
    {{/if}}
  </div>
  </form>
</div>
