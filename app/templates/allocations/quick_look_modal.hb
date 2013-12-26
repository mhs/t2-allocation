<div class="quick-look-modal modal">
  <div class="modal-header">
    Allocation: Project Name
    <span class="close-x" {{action close}}>&#10060;</span>
  </div>
  <div class="modal-body">
    <div class="modal-person" {{bindAttr class="errors.person:error :field"}}>
      <i>&#128100;</i>
      <h3>Person Name</h3>
    </div>
  <form {{action save on="submit"}}>
    <div class="dates">
      <i>&#128197;</i>
      <div class="start">
        <h3>Dec. 26th</h3>
      </div>
      <span class="dash">-</span>
      <div class="end">
        <h3>Jan. 26th</h3>
      </div>
    </div>
    <div class="options">
      <i>&#59249;</i>
      <div class="billable preview" data-test="billable">
        <h3>Billable</h3>
      </div>
      <span>&amp;</span>
      <div class="exclusive" data-test="binding" {{bindAttr class="errors.binding:error :field"}}>
        <h3>Exclusive</h3>
      </div>
    </div>
    <div class="percent-allocated">
      <i>&#9716;</i>
      <h3>100% Allocated</h3>
    </div>
    <div class="notes" data-test="notes">
      <i>&#9998;</i>
      <h3>Notes</h3>
    </div>
  </div>
  <div class="modal-footer">
    <button class="blue-button" {{action openModal}}>Edit</button>
    <button class="white-button" {{action close}}>Cancel</button>
  </div>
  </form>
</div>
