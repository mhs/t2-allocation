`import Ember from "ember";`

SelectableOffice = Ember.ObjectProxy.extend
  selected: []
  isSelected: ( (key, value)->
    office = @get('content')

    unless value == undefined
      if value then @selected.add(office) else @selected.remove(office)

    @selected.contains(office)
  ).property('selected.[]')

`export default SelectableOffice;`
