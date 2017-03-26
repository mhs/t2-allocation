import Ember from "ember";

let group_by_sorted_project = function(array, callback) {
  let projects_with_data = {};
  array.reduce((function(acc, item) {
    let name = item.get('project.name');
    if (acc[name]) {
      acc[name].push(item);
    } else {
      acc[name] = [item];
    }
    return acc;
  }), projects_with_data);

  let projects = Ember.keys(projects_with_data).sort();

  return projects.forEach(function(project) {
    let data = projects_with_data[project];
    return callback.call(null, data, project);
  });
};

let group_by_sorted_name = function(array, callback) {
  let people_with_data = {};
  array.reduce((function(acc, item) {
    let name = item.get('person.name');
    if (acc[name]) {
      acc[name].push(item);
    } else {
      acc[name] = [item];
    }
    return acc;
  }), people_with_data);

  let people = Ember.keys(people_with_data).sort();

  return people.forEach(function(person) {
    let data = people_with_data[person];
    return callback.call(null, data, person);
  });
};


let group_by_sorted_name_role = function(array, callback) {
  let people_with_data = {};
  array.reduce((function(acc, item) {
    let name = item.get('role') ? `0000_so_because_sorting_${item.get('role')}` : item.get('person.name');
    if (acc[name]) {
      acc[name].push(item);
    } else {
      acc[name] = [item];
    }
    return acc;
  }), people_with_data);

  let people = Ember.keys(people_with_data).sort();

  return people.forEach(function(person) {
    let data = people_with_data[person];
    return callback.call(null, data, person);
  });
};

export { group_by_sorted_project, group_by_sorted_name, group_by_sorted_name_role };
