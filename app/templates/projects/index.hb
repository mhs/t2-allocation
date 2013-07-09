<ul class="project_list"> 
  {{#each projects}}
  <li class="project">
  	Project: {{name}} == Client: <span class="client">{{client.name}}</span>
  	<ul>
  		{{#each slots}}
  		<li class="slot">
        Slot {{id}}
        <ul>
          {{#each allocations}}
          <li class="allocation">
            {{shortDate start_date}} - {{shortDate end_date}}
            {{#if person}} : {{person.name}}{{/if}}{{#if office}} : {{office.name}}{{/if}}
          </li>
          {{/each}}
        </ul>
      </li>
  		{{/each}}
  	</ul>
  </li>
  {{/each}}
</ul>
<ul>
  {{#each clients}}
  <li class="client">{{ name }}</li>
  {{/each}}
</ul>
{{view Ember.TextField id="new-client" placeholder="Who gonna pay us?" valueBinding="newName" action="createClient"}}
