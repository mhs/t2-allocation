{{#view App.ProjectAllocationsView}}
  <article class="project dummy-project" {{bind-attr style="projectHeight"}}>
    <div class="project-allocations">
    </div>

    <div class="project-descriptor">
      <div class="segmented-control">
        {{link-to 'Projects' 'projects' class="toggle-button" tagName="button"}}
        {{link-to 'People' 'people' class="toggle-button" tagName="button"}}
      </div>
    </div>
  </article>
{{/view}}

