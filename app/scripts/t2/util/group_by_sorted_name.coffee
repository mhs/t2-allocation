App.group_by_sorted_name = (array, callback) ->
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

