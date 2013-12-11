<section id="peopleList">
  {{#each person in sortedPeople}}
    {{ render 'person' person }}
  {{/each}}
</section>
