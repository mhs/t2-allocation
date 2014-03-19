<header>
  <section class="nav-bar">
    <div class="faux-select">
      <div class="faux-select-box">
        <span class="faux-select-selected">{{name}}</span>
        <span class="faux-select-graphic">&#x25BE;</span>
      </div>
      {{view App.SelectOffice contentBinding="all"
                              optionLabelPath="content.name"
                              optionValuePath="content"
                              selectionBinding="model"
                              data-test="all"
                              class="faux-select-element"}}
    </div>

    <div class="add-project">
      <button class="add-project-button" {{action createProject}}>+ Add Project</button>
    </div>

    {{view App.NavView}}
  </section>

  {{calendar-bar action="selectDate"}}
</header>

{{outlet}}
