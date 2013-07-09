<div class = "allocationContent">
	{{#if person}}{{ person.name }} : {{/if}}{{ shortDate startDate }} - {{ shortDate endDate }}
        	<button {{action editAllocation this}}>edit</button>
        	<button {{action confirmDelete this}}>delete</button>
</div>
