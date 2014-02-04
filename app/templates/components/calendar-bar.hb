<div class="calendar-date-selector">
  {{#if isEditingDate}}
    {{edit-date class="datepicker" action="confirmDate" escape-press="confirmDate"}}
  {{else}}
    <i class="cal">&#128197;</i>
    <span {{action "editDate" on="click"}}>{{firstDate}}</span>
    <i class="dropdown">&#59236;</i>
  {{/if}}
</div>

<ul class="calendar">
  {{#each date in dateRange}}
    <li class="week">{{date}}</li>
  {{/each}}
</ul>
