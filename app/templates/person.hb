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
        <a target="_blank" {{bind-attr href="editUrl"}}><i class="edit-person" >&#9874;</i></a>
        <a target="_blank" {{bind-attr href="newUrl"}}><i class="add-allocation" >&#10133;</i></a>
      </div>
    {{/view}}
  </article>
{{/view}}
