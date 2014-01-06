<section id="projectList">
  {{#each project in sortedProjects}}
    {{#if project.availableProject}}
      {{ render 'availableProject' project }}
    {{else}}
      {{#if project.dummyProject}}
        {{ render 'dummyProject' project }}
      {{else}}
        {{ render 'project' project }}
      {{/if}}
    {{/if}}
  {{/each}}
</section>
