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
        {{view Ember.TextField valueBinding="name"}}
        {{#each msg in errors.name}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.billable:error :field"}}>
        <label>Billable</label>
        {{view Ember.Checkbox checkedBinding="billable"}}
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.binding:error :field"}}>
        <label>Binding</label>
        {{view Ember.Checkbox checkedBinding="binding"}}
        {{#each msg in errors.binding}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.notes:error :field"}}>
        <label>Notes</label>
        {{view Ember.TextArea valueBinding="notes"}}
        {{#each msg in errors.notes}}{{msg}}{{/each}}
      </div>
      <div {{bindAttr class="errors.offices:error :field"}}>
        <label>Offices</label>
        <ul>
          {{#each office in selectedOffices}}
            <li {{bindAttr class="office.isSelected"}}{{action selectOffice office}}>{{office.name}}</li>
          {{/each}}
        </ul>
        {{#each msg in errors.offices}}{{msg}}{{/each}}
      </div>
    </div>
    <div class="modal-footer">
      <button type="submit" {{bindAttr disabled="shouldDisableSubmit"}}>Save</button>
      <button {{action close}}>Cancel</button>
      {{#if isSaving}}
        Saving...
      {{/if}}
    </div>
  </form>
</div>
