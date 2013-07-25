<article class="project" {{bindAttr data-project-id="id"}} {{bindAttr style="projectHeight"}}>
	<div class="container">
		<div class="allocations">
			{{#each allocation in currentAllocations}}
				{{ render "allocation" allocation }}
			{{/each}}
		</div>
	</div>
	{{#view App.ProjectEditView class="descriptor"}}
		<span>{{ name }}</span>
	{{/view}}
</article>
