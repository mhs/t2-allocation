<div class="modal">
  <div class="modal-header">
    {{#if isNew}}
      Create Project
    {{else}}
      Editing: {{unbound name}}
    {{/if}}
  </div>
  <form {{action save on="submit"}}>
    <div class="modal-body">
      <div {{bindAttr class="errors.name:error :field"}}>
        <label>Name</label>
        {{input type="text" value=name}}
        {{#each msg in errors.name}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.billable:error :field"}}>
        <label>{{input type="checkbox" checked=billable}}Billable</label>
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.notes:error :field"}}>
        <label>Notes</label>
        {{textarea value=notes}}
        {{#each msg in errors.notes}}{{msg}}{{/each}}
      </div>
      <div>
        Offices
        {{#each offices}}
          <div data-test="office">
            <label>{{input type="checkbox" checked=isSelected}}{{name}}</label>
          </div>
        {{/each}}
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
