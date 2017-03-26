import Project from "t2-allocation/models/project";
let DummyProject = Project.extend({
  dummyProject: true,

  sortOrder: -1
});
export default DummyProject;
