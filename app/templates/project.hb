<article class="project" {{bindAttr data-project-id="id"}} {{bindAttr style="projectHeight"}}>
	<div class="container">
		<div class="allocations">
			{{#each allocation in currentAllocations}}
				{{ render "allocation" allocation }}
			{{/each}}
		</div>
	</div>
	<div {{action 'editProject' this}} class="descriptor">
		<span>{{ name }}</span>
	</div>
</article>
