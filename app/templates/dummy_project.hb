{{#view App.ProjectAllocationsView}}
  <article class="project dummy-project" {{bind-attr style="projectHeight"}}>
    <div class="project-allocations">
    </div>

    <div class="project-descriptor">
      <button class="white-button" {{action createProject}}>Add Project</button>
    </div>
  </article>
{{/view}}

