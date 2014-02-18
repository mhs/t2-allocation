<header>
  <section class="nav-bar">
    {{view App.SelectOffice contentBinding="all"
                            optionLabelPath="content.name"
                            optionValuePath="content"
                            selectionBinding="model"
                            data-test="all"
                            class="white-button office-select"}}
    <div class="segmented-control">
      {{link-to 'Projects' 'projects' class="blue-button" tagName="button"}}
      {{link-to 'People' 'people' class="blue-button" tagName="button"}}
    </div>

    {{view App.NavView}}
  </section>
  {{calendar-bar action="selectDate" resize="resize"}}
</header>

{{outlet}}
