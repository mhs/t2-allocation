{{#view App.ProjectAllocationsView}}
  <article class="project" {{bind-attr style="projectHeight"}}>
    <div class="project-allocations">
      {{#each availability in currentAvailabilities}}
        {{ render "availability" availability }}
      {{/each}}
    </div>

    <div class="project-descriptor">
      {{ name }}
    </div>
  </article>
{{/view}}
