import trash from './images/delete.png';

const myProjectsModule = (function () {
  const myProjectsList = [];

  const projects = document.querySelector('.projectItems');

  // Default Projects
  const personal = document.createElement('div');
  personal.setAttribute('class', 'projects');
  personal.textContent = 'Personal';
  projects.appendChild(personal);
  myProjectsList.push(personal);

  const work = document.createElement('div');
  work.setAttribute('class', 'projects');
  work.textContent = 'Work';
  projects.appendChild(work);
  myProjectsList.push(work)

  // Custom Projects
  const addProjectText = document.createElement('div');

  const createAddProjectButton = () => {
    addProjectText.setAttribute('id', 'addProjectText');
    addProjectText.textContent = '+ Add Project';
    projects.appendChild(addProjectText);

  };

  createAddProjectButton();

  const input = document.createElement('input');

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.setAttribute('class', 'projectFormBtns');
  addBtn.setAttribute('id', 'addProjectBtn');

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('class', 'projectFormBtns');
  cancelBtn.setAttribute('id', 'cancelProjectBtn');

  const newProjectForm = document.createElement('div');

  const addProjectForm = () => {
    projects.removeChild(addProjectText);

    newProjectForm.setAttribute('id', 'newProjectForm');
    projects.appendChild(newProjectForm);

    input.setAttribute('id', 'newProjectFormInput');
    input.setAttribute('placeholder', 'Project Title');
    input.setAttribute('required', true)
    newProjectForm.appendChild(input);

    newProjectForm.appendChild(addBtn);
    newProjectForm.appendChild(cancelBtn);
    
  };

  const submitForm = () => {
    projects.removeChild(newProjectForm);
    
    const title = input.value;

    const customProjectContainer = document.createElement('div');
    customProjectContainer.setAttribute('class', 'customProjectsContainer');

    const customProject = document.createElement('div');
    customProject.setAttribute('class', 'projects');
    customProject.textContent =  `${title.charAt(0).toUpperCase()}${title.slice(1).toLowerCase()}`;
    customProjectContainer.appendChild(customProject);
    myProjectsList.push(customProject);

    const xBtn = document.createElement('div');
    xBtn.setAttribute('class', 'deleteProject');

    const trashIcon = new Image();
    trashIcon.src = trash;
    trashIcon.setAttribute('id', 'trash')
    xBtn.appendChild(trashIcon);
    customProjectContainer.appendChild(xBtn);

    projects.appendChild(customProjectContainer);
    projects.appendChild(addProjectText);

    document.querySelectorAll('.deleteProject').forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
      })
      
    })
    input.value = ''; 
    
  };
  const cancelForm = () => {
    
    projects.removeChild(newProjectForm);
    projects.appendChild(addProjectText);
  };

  cancelBtn.addEventListener('click', cancelForm);
  addProjectText.addEventListener('click', addProjectForm);
  addBtn.addEventListener('click', submitForm);

  return {myProjectsList, submitForm, addBtn }
})();

export default myProjectsModule;





