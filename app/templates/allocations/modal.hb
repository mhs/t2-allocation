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
    <div class="modal-project" {{bind-attr class="errors.project:error :field"}}>
      <i>&#128710;</i>
      <label>Project</label>
      {{view Ember.Select class="white-button" contentBinding="projects"
                          optionLabelPath="content.name"
                          optionValuePath="content"
                          valueBinding="project"
                          selectionBinding="project"
                          prompt="Select a project"}}
      {{errors.project}}
    </div>
    <div class="modal-person" {{bind-attr class="errors.person:error :field"}}>
      <i>&#128100;</i>
      <label>Person</label>
      {{view Ember.Select class="white-button" contentBinding="people"
                          optionLabelPath="content.name"
                          optionValuePath="content"
                          valueBinding="person"
                          selectionBinding="person"
                          prompt="Select a name"}}
      {{errors.person}}
    </div>
  <form {{action save on="submit"}}>
    <div class="dates">
      <div class="start" {{bind-attr class="errors.startDate:error :field"}}>
        <i>&#128197;</i>
        <label>Start Date</label>
        {{date-picker name="startDate" class="start-date" value=formStartDate}}
        {{errors.startDate}}
      </div>
      <span>-</span>
      <div class="end" {{bind-attr class="errors.endDate:error :field"}}>
        <label>End Date</label>
        {{date-picker name="endDate" class="end-date" value=formEndDate}}
        {{errors.endDate}}
      </div>
    </div>
    <div class="options">
      <div class="billable" data-test="billable" {{bind-attr class="errors.billable:error :field" }} >
        <label>{{input type="checkbox" checked=billable}}Billable<span id="billable-check"></span></label>
        {{errors.billable}}
      </div>
      <div class="exclusive" data-test="binding" {{bind-attr class="errors.binding:error :field"}}>
        <label>{{input type="checkbox" checked=binding}}Exclusive<span id="binding-check"></span></label>
        {{errors.binding}}
      </div>
    </div>
    <div class="percent-allocated" {{bind-attr class="errors.percentAllocated:error :field"}}>
      <i>&#9716;</i>
      <label>% Allocated{{input type="text" value=percentAllocated }}</label>
      {{errors.percentAllocated}}
    </div>
    <div class="notes" data-test="notes" {{bind-attr class="errors.notes:error :field"}}>
      <i>&#9998;</i>
      <label>Notes</label>
      {{view Ember.TextArea valueBinding="notes"}}
      {{errors.notes}}
    </div>
  </div>
  <div class="modal-footer">
    <button class="blue-button" type="submit" {{bind-attr disabled="shouldDisableSubmit"}}>Save</button>
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
