import Ember from "ember";

let SelectableOffice = Ember.ObjectProxy.extend({
  selected: [],
  isSelected: ( function(key, value){
    let office = this.get('content');

    if (value !== undefined) {
      if (value) { this.selected.add(office); } else { this.selected.remove(office); }
    }

    return this.selected.contains(office);
  }).property('selected.[]')
});

export default SelectableOffice;
