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
