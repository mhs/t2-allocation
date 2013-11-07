<div class="allocation-content" {{bind-attr title="hint"}}>
  {{#if person}}
    <span class="allocation-identifier">{{ person.name }}</span>
  {{/if}}

  {{#if isExternal}}
    <em>({{office.name}})</em>
  {{/if}}

  <span class="allocation-range">{{ shortDate startDate }} - {{ shortDate endDate }}</span>
</div>
