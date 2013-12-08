{{#view App.PersonAllocationsView}}
  <article class="person" {{bindAttr data-person-id="id"}} {{bindAttr style="personHeight"}}>
    <div class="person-allocations">
      {{#each allocation in currentAllocations}}
        {{ render "person_allocation" allocation }}
      {{/each}}
    </div>

    {{#view App.PersonEditView class="person-descriptor"}}
      {{ name }}
      <div class="person-controls">
        <i class="edit-person" {{action editPerson model}}>&#9874;</i>
        <i class="add-allocation" {{action addAllocation}}>&#10133;</i>
      </div>
    {{/view}}
  </article>
{{/view}}
