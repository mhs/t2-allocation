import Project from "t2-allocation/models/project";
let AvailableProject = Project.extend({
  availableProject: true,

  sortOrder: 4
});
export default AvailableProject;
