<div class="modal">
  <div class="modal-header">
    {{#if isNew}}
      Create Project
    {{else}}
      Editing: {{unbound name}}
    {{/if}}
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>
  <form {{action save on="submit"}}>
    <div class="modal-body">
      <div class="project-name" {{bindAttr class="errors.name:error :field"}}>
        <label>Name</label>
        {{input type="text" value=name}}
        {{#each msg in errors.name}}{{msg}}{{/each}}
      </div>
      <div class="billable project-modal" {{bindAttr class="errors.billable:error :field"}}>
        <label>{{input type="checkbox" checked=billable}}Billable<span></span></label>
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div class="notes" {{bindAttr class="errors.notes:error :field"}}>
        <label>Notes</label>
        {{textarea value=notes}}
        {{#each msg in errors.notes}}{{msg}}{{/each}}
      </div>
      <div class="modal-offices">
        <label>Offices</label>
        {{#each offices}}
          <div class="modal-office" data-test="office">
            <label>{{input type="checkbox" checked=isSelected}}{{name}}<span></span></label>
          </div>
        {{/each}}
      </div>
    </div>
    <div class="modal-footer">
      <button class="blue-button" type="submit" {{bindAttr disabled="shouldDisableSubmit"}}>Save</button>
      <button class="white-button" {{action close}}>Cancel</button>
      {{#if canDelete}}
        <a href="#" {{action delete}}>Delete</a>
      {{/if}}
      {{#if isSaving}}
        Saving...
      {{/if}}
    </div>
  </form>
</div>
