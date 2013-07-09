<article class="project" {{bindAttr data-project-id="id"}} {{bindAttr style="projectHeight"}}>
	<div class="container">
		<div class="allocations">
			{{#each allocation in currentAllocations}}
				{{ render "allocation" allocation }}
			{{/each}}
		</div>
	</div>
	<div class="descriptor">
		<span>{{ name }}</span>
		<td class="actions">
        	<button {{action editProject this}}>edit</button>
        	<button {{action confirmDelete this}}>delete</button>
      	</td>
	</div>
</article>
