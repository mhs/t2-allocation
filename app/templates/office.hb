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

    <button {{bind-attr class=":blue-button :project-person-toggle showPeopleToggle:hidden"}} {{action "switchToProjects"}}>
      Projects<i>&#59215;</i>
    </button>

    <button {{bind-attr class=":blue-button :project-person-toggle showProjectsToggle:hidden"}} {{action "switchToPeople"}}>
      People<i>&#59215;</i>
    </button>

    {{view App.NavView}}
  </section>

  {{calendar-bar action="selectDate" resize="resize"}}
</header>

{{outlet}}
