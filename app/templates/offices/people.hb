<header>
  <section class="nav-bar">
    {{view App.SelectOffice contentBinding="offices"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            selectionBinding="model"
                            data-test="offices"
                            class="white-button office-select"}}
    <button class="blue-button project-person-toggle" {{action "switchToProjects"}}> People<i>&#59215;</i></button>
    {{view App.NavView}}
  </section>

  <section id="calendarBar">
    <div class="calendar-date-selector">
      {{#if isEditingDate}}
        {{edit-date class="datepicker" action="confirmDate" escape-press="confirmDate"}}
      {{else}}
        <span {{action "editDate" on="click"}}>{{firstDate}}</span>
      {{/if}}
    </div>

    <ul class="calendar">
      {{#each date in dateRange}}
        <li class="week">{{date}}</li>
      {{/each}}
    </ul>
  </section>
</header>

<section id="peopleList">
  {{#each person in sortedPeople}}
    {{ render 'person' person }}
  {{/each}}
</section>
