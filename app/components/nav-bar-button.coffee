`import Ember from "ember";`

NavBarButton = Ember.Component.extend
  tagName: 'li'
  classNameBindings: ['classes']

  link: null
  displayTitle: false

  classes: Ember.computed.alias('link.classes')
  url: Ember.computed.alias('link.url')
  link_text: Ember.computed.alias('link.link_text')
  icon: Ember.computed.alias('link.icon')

  title: Ember.computed ->
    if @get('displayTitle')
      @get('link.title')

`export default NavBarButton;`
