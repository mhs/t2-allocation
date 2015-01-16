`import Ember from "ember";`

AllocationTrack = Ember.Object.extend
  #externally set props
  index: 0
  currentOffice: null
  allocation: null

  #internal props

  isPartial: Ember.computed.lt('allocation.percentAllocated', 100)
  isExternal: Ember.computed 'currentOffice', 'allocation.person.office', ->
    @get('allocation.person.office') != @get('currentOffice')

  hint: (->
    _external = if @get('isExternal') then " (#{@get('allocation.person.office.name')})" else ''
    "#{@get('allocation.person.name')}#{_external}"
  ).property('allocation.person.office.name', 'isExternal', 'allocation.person.name')

`export default AllocationTrack;`
