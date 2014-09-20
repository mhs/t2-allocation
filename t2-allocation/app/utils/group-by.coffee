`import Ember from "ember";`

sortedGroupBy = (groupKey) ->
  func = (array, callback) ->
    groups = {}
    array.reduce(((acc, item) ->
      name = item.get(groupKey)
      if acc[name]
        acc[name].push(item)
      else
        acc[name] = [item]
      acc
    ), groups)

    groupKeys = Ember.keys(groups).sort()

    groupKeys.forEach (k) ->
      data = groups[k]
      callback.call(null, data, k)

group_by_sorted_project = (array, callback) ->
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

group_by_sorted_name = (array, callback) ->
  people_with_data = {}
  array.reduce(((acc, item) ->
    name = item.get('person.name')
    if acc[name]
      acc[name].push(item)
    else
      acc[name] = [item]
    acc
  ), people_with_data)

  people = Ember.keys(people_with_data).sort()

  people.forEach (person) ->
    data = people_with_data[person]
    callback.call(null, data, person)

`export { group_by_sorted_project, group_by_sorted_name };`
