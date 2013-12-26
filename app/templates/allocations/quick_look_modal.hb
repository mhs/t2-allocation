<div class="quick-look-modal modal">
  <div class="modal-header">
    {{content.name}}
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>
  <div class="modal-body">
    <div class="modal-person" {{bindAttr class="errors.person:error :field"}}>
      <i>&#128100;</i>
      <label>Person</label>
    </div>
  <form {{action save on="submit"}}>
    <div class="dates">
      {{startDate}}
      <span>-</span>
      {{endDate}}
    </div>
    <div class="options">
      <div class="billable" data-test="billable" {{bindAttr class="errors.billable:error :field" }} >
        <label>{{input type="checkbox" checked=billable}}Billable<span id="billable-check"></span></label>
        {{#each msg in errors.billable}}{{msg}}{{/each}}
      </div>
      <div class="exclusive" data-test="binding" {{bindAttr class="errors.binding:error :field"}}>
        <label>{{input type="checkbox" checked=binding}}Binding<span id="binding-check"></span></label>
        {{#each msg in errors.binding}}{{msg}}{{/each}}
      </div>
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
      <a href="#" {{action delete}}>Delete</a>
    {{/if}}
    {{#if isSaving}}
      Saving...
    {{/if}}
  </div>
  </form>
</div>
