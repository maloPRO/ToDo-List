
export const myProjects = (function () {
  const newProject = () => {
    const projects = document.getElementById('projects');
    
    const projectSectionTitle = document.createElement('h3');
    projectSectionTitle.setAttribute('id', 'projectsSectionTitle');
    projectSectionTitle.textContent = 'Projects';
    projects.appendChild(projectSectionTitle);

    const addProject = document.createElement('div');
    addProject.setAttribute('id', 'addProject');
    addProject.setAttribute('class', 'projects');
    addProject.textContent = '+ New Project';
    projects.appendChild(addProject);
    
  }


  return{newProject}
  
})();