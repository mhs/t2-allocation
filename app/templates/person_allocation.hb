<div class="allocation-content" {{bind-attr title="hint"}}>
  {{#if project}}
    <span class="allocation-identifier">{{ project.name }}</span>
  {{/if}}

  <span class="allocation-range">{{ shortDate startDate }} - {{ shortDate endDate }}</span>
</div>
