<header>
  <section class="nav-bar">
    {{view App.SelectOffice contentBinding="all"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            selectionBinding="model"
                            data-test="all"
                            class="white-button office-select"}}
    <div class="add-project">
      <button class="white-button" {{action createProject}}>+ Add Project</button>
    </div>

    {{view App.NavView}}
  </section>
  {{calendar-bar action="selectDate" resize="resize"}}
</header>

{{outlet}}
