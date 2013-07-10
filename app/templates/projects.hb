<section id="controls">
	<div class="title">
		<h1>Projects</h1>
	</div>
	<button class="new-project-button" style="float: right;" {{action createProject}}>Add Project</button>
	<button class="new-allocation-button" style="float: right;" {{action createAllocation}}>Add Allocation</button>
</section>
<section id="timeline">
	<section id="calendarBar">
		<div class="selector">
			{{#if isEditing}}
				{{view App.EditDateView id='datepicker'}}
			{{else}}
				<span {{action "editDate" on="click"}}>{{firstDate}}</span>
			{{/if}}
		</div>
		<div class="calendar">
			<ul>
				{{#each date in dateRange}}
				<li>{{date}}</li>
				{{/each}}
			</ul>
		</div>
	</section>
	<section id="projectList">
	{{#each project in controller}}
		{{ render 'project' project }}
	{{/each}}
	</section>
</section>
