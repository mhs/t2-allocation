App.group_by_sorted_project = (array, callback) ->
  projects_with_data = {}
  array.reduce(((acc, item) ->
    name = item.get('project.name')
    if acc[name]
      acc[name].push(item)
    else
      acc[name] = [item]
    acc
  ), projects_with_data)

  projects = Ember.keys(projects_with_data).sort()

  projects.forEach (project) ->
    data = projects_with_data[project]
    callback.call(null, data, project)

