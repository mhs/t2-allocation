App.AllocationBundle = DS.Model.extend
  projects: DS.hasMany 'project'
  offices: DS.hasMany 'office'
  people: DS.hasMany 'person'
  allocations: DS.hasMany 'allocation'
