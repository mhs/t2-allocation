{{#view App.ProjectAllocationsView}}
  <article class="project" {{bindAttr data-project-id="id"}} {{bindAttr style="projectHeight"}}>
    <div class="project-allocations">
      {{#each allocation in currentAllocations}}
        {{ render "allocation" allocation }}
      {{/each}}
    </div>

    {{#view App.ProjectEditView class="project-descriptor"}}
      {{ name }}
      <div class="project-controls">
        <i class="edit-project" {{action editProject model}}>&#9874;</i>
        <i class="add-allocation" {{action addAllocation}}>&#10133;</i>
      </div>
    {{/view}}
  </article>
{{/view}}
