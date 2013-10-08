<section id="controls">
  <div class="title">
    <h1>Projects</h1>
  </div>
  {{view App.SelectOffice contentBinding="offices"
                          optionLabelPath="content.name"
                          optionValuePath="content"
                          selectionBinding="model"
                          data-test="offices" }}
  <button class="new-project-button" {{action createProject}}>Add Project</button>
  <button class="new-allocation-button" {{action createAllocation}}>Add Allocation</button>
</section>
<section id="timeline">
  <section id="calendarBar">
    <div class="selector">
      {{#if isEditingDate}}
        {{edit-date class="datepicker" action="confirmDate" escape-press="confirmDate"}}
      {{else}}
        <span {{action "editDate" on="click"}}>{{firstDate}}</span>
      {{/if}}
    </div>
    <div class="calendar">
      <ul>
        {{#each date in dateRange}}
        <li>{{date}}</li>
        {{/each}}
      </ul>
    </div>
  </section>
  <section id="projectList">
  {{#each project in sortedProjects}}
    {{ render 'project' project }}
  {{/each}}
  </section>
</section>
