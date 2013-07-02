<div class = "allocationContent">
	{{#if person}}{{ person.name }} : {{else}}{{#if role}}<span class='role'>{{role.name}}</span> : {{/if}}{{/if}}{{ shortDate startDate }} - {{ shortDate endDate }}
        	<button {{action editAllocation this}}>edit</button>
        	<button {{action confirmDelete this}}>delete</button>
</div>