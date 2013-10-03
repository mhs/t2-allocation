<div class = "allocationContent" {{bind-attr title="hint"}}>
  {{#if person}}
    <span class="identifier">{{ person.name }}</span>
  {{/if}}
  {{#if isExternal}}
    <em>({{office.name}})</em>
  {{/if}}
  <span class="range">{{ shortDate startDate }} - {{ shortDate endDate }}</span>
</div>
