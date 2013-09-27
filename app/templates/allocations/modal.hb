<div class="modal">
  <div class="modal-header">
    {{#if isNew}}
      Create Allocation
    {{else}}
      Editing Allocation
    {{/if}}
  </div>
  <form {{action save on="submit"}}>
    <div class="modal-body">
      <div {{bindAttr class="errors.startDate:error :field"}}>
        <label>Start Date</label>
        {{view App.DateField class="start-date" dateBinding="startDate"}}
        {{#each msg in errors.startDate}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.end_date:error :field"}}>
        <label>End Date</label>
        {{view App.DateField class="end-date" dateBinding="endDate"}}
        {{#each msg in errors.endDate}}{{msg}}{{/each}}
      </div>
      <div data-test="billable" {{bindAttr class="errors.billable:error :field" }} >
        <label>Billable</label>
        {{view Ember.Checkbox checkedBinding="billable"}}
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div data-test="binding" {{bindAttr class="errors.binding:error :field"}}>
        <label>Binding</label>
        {{view Ember.Checkbox checkedBinding="binding"}}
        {{#each msg in errors.binding}}{{msg}}{{/each}}
      </div>
      <div data-test="notes" {{bindAttr class="errors.notes:error :field"}}>
        <label>Notes</label>
        {{view Ember.TextArea valueBinding="notes"}}
        {{#each msg in errors.notes}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.person:error :field"}}>
        <label>Person</label>
        {{view Ember.Select contentBinding="people"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            valueBinding="person"
                            selectionBinding="person"
                            prompt="Select a name"}}
        {{#each msg in errors.person}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.project:error :field"}}>
        <label>Project</label>
        {{view Ember.Select contentBinding="projects"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            valueBinding="project"
                            selectionBinding="project"
                            prompt="Select a project"}}
        {{#each msg in errors.project}}{{msg}}{{/each}}
      </div>
    </div>
    <div class="modal-footer">
      <button type="submit" {{bindAttr disabled="shouldDisableSubmit"}}>Save</button>
      <button {{action close}}>Cancel</button>
      {{#if canDelete}}
        <a href="#" {{action delete}}>Delete</a>
      {{/if}}
      {{#if isSaving}}
        Saving...
      {{/if}}
    </div>
  </form>
</div>
