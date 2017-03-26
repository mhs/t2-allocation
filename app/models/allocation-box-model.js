`import Ember from "ember";`

AllocationBoxModel = Ember.ObjectProxy.extend
  #externally set props
  currentOffice: null
  allocation: null

  #internal props

  isPartial: Ember.computed.lt('content.percentAllocated', 100)
  isExternal: Ember.computed 'currentOffice', 'content.person.office', ->
    office = @get('content.person.office')
    office && (office != @get('currentOffice'))
  identifier: Ember.computed.any('content.person.name','content.role')
  index: Ember.computed.alias 'content.track'

  hint: (->
    _external = if @get('isExternal') then " (#{@get('content.person.office.name')})" else ''
    "#{@get('content.person.name')}#{_external}"
  ).property('content.person.office.name', 'isExternal', 'content.person.name')

`export default AllocationBoxModel;`
