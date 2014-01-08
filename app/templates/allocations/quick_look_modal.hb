<div class="modal">
  <div class="modal-header">
    Allocation: {{project.name}}
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>
  <div class="modal-body">
    <div class="modal-person" {{bindAttr class="errors.person:error :field"}}>
      <i>&#128100;</i>
      <h3>{{person.name}}</h3>
    </div>
  <form {{action save on="submit"}}>
    <div class="dates">
      <i>&#128197;</i>
      <div class="start">
        <h3>{{startDate}}</h3>
      </div>
      <span class="dash">-</span>
      <div class="end">
        <h3>{{endDate}}</h3>
      </div>
    </div>
    <div class="options">
      <i>&#59249;</i>
      <div class="billable preview" data-test="billable">
        <h3>{{billableStatus}}</h3>
      </div>
      <span>/</span>
      <div class="exclusive" data-test="binding" {{bindAttr class="errors.binding:error :field"}}>
        <h3>{{bindingStatus}}</h3>
      </div>
    </div>
    <div class="percent-allocated">
      <i>&#9716;</i>
      <h3>100% Allocated</h3>
    </div>
    {{#if notes}}
      <div class="notes" data-test="notes">
        <i>&#9998;</i>
        <h3>{{notes}}</h3>
      </div>
    {{/if}}
  </div>
  <div class="modal-footer">
    <button class="blue-button" {{action edit model}}>Edit</button>
    <button class="white-button" {{action close}}>Cancel</button>
  </div>
  </form>
</div>
