{{#view App.ProjectAllocationsView}}
  <article class="project" {{bindAttr data-project-id="id"}} {{bindAttr style="projectHeight"}}>
    <div class="project-allocations">
      {{#each allocation in currentAllocations}}
        {{ render "allocation" allocation }}
      {{/each}}
    </div>

    {{#view App.ProjectEditView class="project-descriptor"}}
      {{ name }}
    {{/view}}
  </article>
{{/view}}
