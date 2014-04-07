<div class="modal">

  <div class="modal-header">
    {{#if isNew}}
      Create Allocation
    {{else}}
      Editing Allocation
    {{/if}}
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>

  <form {{action save on="submit"}}>
    <div class="modal-body">
      <div class="modal-project" {{bind-attr class="errors.project:error :field"}}>
        <label><i>&#128710;</i> Project</label>
        {{view Ember.Select class="white-button" contentBinding="projects"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            valueBinding="project"
                            selectionBinding="project"
                            prompt="Select a project"}}
        {{errors.project}}
      </div>
      <div class="modal-person" {{bind-attr class="errors.person:error :field"}}>
        <label><i>&#128100;</i> Person</label>
        {{view Ember.Select class="white-button" contentBinding="people"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            valueBinding="person"
                            selectionBinding="person"
                            prompt="Select a name"}}
        {{errors.person}}
      </div>

      <div class="dates">
        <div class="start" {{bind-attr class="errors.startDate:error :field"}}>
          <label><i>&#128197;</i> Start Date</label>
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
        <div class="option" data-test="billable" {{bind-attr class="errors.billable:error :field" }} >
          <label>{{input type="checkbox" checked=billable}}Billable<span id="billable-check"></span></label>
          {{errors.billable}}
        </div>
        <div class="option" data-test="binding" {{bind-attr class="errors.binding:error :field"}}>
          <label>{{input type="checkbox" checked=binding}}Exclusive<span id="binding-check"></span></label>
          {{errors.binding}}
        </div>
        <div class="option" data-test="provisional" {{bind-attr class="errors.provisional:error :field" }} >
          <label>{{input type="checkbox" checked=provisional}}Provisional<span id="provisional-check"></span></label>
          {{errors.provisional}}
        </div>
      </div>

      <div class="percent-allocated" {{bind-attr class="errors.percentAllocated:error :field"}}>
        <label><i>&#9716;</i> Allocation %{{input type="text" value=percentAllocated }}</label>
        {{errors.percentAllocated}}
      </div>

      <div class="notes" data-test="notes" {{bind-attr class="errors.notes:error :field"}}>
        <label><i>&#9998;</i> Notes</label>
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
