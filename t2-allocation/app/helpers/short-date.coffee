`import Ember from "ember"`

h = Ember.Handlebars.helper "shortDate", (unformatted_date) ->
  moment(unformatted_date).format('MMM D')

`export default h;`
