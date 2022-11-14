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

    addProject.addEventListener('click', () => {
      projects.removeChild(addProject);

      const projectInputContainer = document.createElement('div');
      projectInputContainer.setAttribute('id', 'projectInputContainer');
      projects.appendChild(projectInputContainer);

      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Project Title');
      input.setAttribute('id', 'newProjectInput');
      
      projectInputContainer.appendChild(input);

      const projectInputBtns = document.createElement('div');
      projectInputBtns.setAttribute('id', 'projectInputBtns');
      projectInputContainer.appendChild(projectInputBtns);

      const addBtn = document.createElement('button');
      addBtn.setAttribute('id', 'addProjectBtn');

      const cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('id', 'cancelProjectBtn');

      addBtn.textContent = 'Add'
      cancelBtn.textContent = 'Cancel';

      projectInputBtns.appendChild(addBtn);
      projectInputBtns.appendChild(cancelBtn);

      addBtn.addEventListener('click', () => {
        const projectName = input.value;
        
        const addedProjectContainer = document.createElement('div');
        addedProjectContainer.setAttribute('class', 'projectsContainer');

        const addedProject = document.createElement('div');
        addedProject.setAttribute('class', 'projects');
        addedProject.textContent = projectName;

        addedProjectContainer.appendChild(addedProject);

        const deleteProject = document.createElement('button');
        deleteProject.setAttribute('class', 'deleteProject')
        deleteProject.textContent = 'x';
        addedProjectContainer.appendChild(deleteProject)


        projects.removeChild(projectInputContainer);
        projects.appendChild(addedProjectContainer);
        projects.appendChild(addProject);

        deleteProject.addEventListener('click', () => {
          deleteProject.parentElement.remove();
        })

      })

      cancelBtn.addEventListener('click' , () => {
        projects.removeChild(projectInputContainer);
        projects.appendChild(addProject);
      })
      
    })
    
  }

  return{newProject}
  
})();