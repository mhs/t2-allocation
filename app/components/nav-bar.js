import Ember from "ember";
import ENV from "t2-allocation/config/environment";

export default Ember.Component.extend({
  tagName: 'nav',
  topLinks: null,
  bottomLinks: null,

  didInsertElement() {
    let url = ENV.NAVBAR_URL;
    let self = this;
    return $.getJSON(url, {}, function(data, status, xhr) {
      let topLinks = data.top.slice();
      let current_link = topLinks.find(item => !!item.url.match(new RegExp(window.location.origin)));
      if (!current_link) {
        current_link = topLinks.get('firstObject');
      }
      if (!current_link.classes) {
        current_link.classes = '';
      }
      current_link.classes += ' selected-application';
      self.set('topLinks', topLinks);
      return self.set('bottomLinks', Ember.ArrayProxy.create({content: data.bottom}));
    });
  }
});
