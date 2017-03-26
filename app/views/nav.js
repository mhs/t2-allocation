`import Ember from "ember";`
`import ENV from "t2-allocation/config/environment";`

NavView = Ember.View.extend
  tagName: 'nav'
  templateName: 'nav'

  top_links: null
  bottom_links: null

  didInsertElement: () ->
    url = ENV.NAVBAR_URL
    self = this
    $.getJSON(url, {}, (data, status, xhr) ->
      top_links = Ember.ArrayProxy.create({content: data.top})
      current_link = top_links.find((item) ->
        !!item.url.match(new RegExp(window.location.origin))
      );
      if (!current_link)
        current_link = top_links.get('firstObject')
      if (!current_link.classes)
        current_link.classes = ''
      current_link.classes += ' selected-application'
      self.set('top_links', top_links)
      self.set('bottom_links', Ember.ArrayProxy.create({content: data.bottom}))
    )

`export default NavView;`
