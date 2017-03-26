// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import Ember from "ember";
import ENV from "t2-allocation/config/environment";

let NavView = Ember.View.extend({
  tagName: 'nav',
  templateName: 'nav',

  top_links: null,
  bottom_links: null,

  didInsertElement() {
    let url = ENV.NAVBAR_URL;
    let self = this;
    return $.getJSON(url, {}, function(data, status, xhr) {
      let top_links = Ember.ArrayProxy.create({content: data.top});
      let current_link = top_links.find(item => !!item.url.match(new RegExp(window.location.origin)));
      if (!current_link) {
        current_link = top_links.get('firstObject');
      }
      if (!current_link.classes) {
        current_link.classes = '';
      }
      current_link.classes += ' selected-application';
      self.set('top_links', top_links);
      return self.set('bottom_links', Ember.ArrayProxy.create({content: data.bottom}));
    });
  }
});

export default NavView;
