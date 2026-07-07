import { ProjectList } from ".index.js";

export function projectMaker(title) {
  const project = new Project(title);
  project.ProjArr();
}
