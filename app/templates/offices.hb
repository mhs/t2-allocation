<header>
  <section class="nav-bar">
    {{view App.SelectOffice contentBinding="all"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            selectionBinding="model"
                            data-test="all"
                            class="white-button office-select"}}
    <button class="blue-button project-person-toggle" {{action "switchToPeople"}}> Projects<i>&#59215;</i></button>
    {{view App.NavView}}
  </section>
  {{calendar-bar}}
</header>

{{outlet}}
