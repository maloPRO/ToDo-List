import trash from '../images/trash.png';
import addIcon from '../images/add.png';

const myProjectsModule = (function() {

  const myProjectsList = JSON.parse(localStorage.getItem('projects')) || [];
  const projectList = document.querySelector('.projectList');
  
  // Add project form elements 
  const form = document.createElement('form');
  const input = document.createElement('input');
  const addProjectBtn = document.createElement('button');
  const addProjectDiv = document.createElement('div');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const addPIcon = new Image ();

  addProjectDiv.setAttribute('class', 'addProjectDiv');
  form.setAttribute('class', 'projectForm');
  input.setAttribute('required', true);
  input.setAttribute('placeholder', 'Project Title');

  addBtn.textContent = 'Add';
  cancelBtn.textContent = 'Cancel';
  addBtn.setAttribute('type', 'submit');
  cancelBtn.setAttribute('type', 'button');

  addPIcon.src = addIcon;
  addProjectDiv.appendChild(addPIcon)

  addProjectDiv.appendChild(addProjectBtn);
  projectList.appendChild(addProjectDiv);

  class Project {
    constructor(title) {
      this.title = title;
    }
  }
  const newProject = (title) => {
    const project = new Project(input.value);
    myProjectsList.push(project);
    localStorage.setItem('projects', JSON.stringify(myProjectsList));

    return { title }

  }
  const displayForm = () => {
    projectList.removeChild(addProjectDiv);
    projectList.appendChild(form)
    form.append(input, addBtn, cancelBtn);
  }
  const closeForm = () => {
    projectList.removeChild(form);
    projectList.appendChild(addProjectDiv);
  }
  const displayProject = ({ title }) => {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'projects');

    const projectName = document.createElement('p');
    projectName.setAttribute('class', 'projectName');
    projectName.textContent = `${title.charAt(0).toUpperCase()}${title.slice(1).toLowerCase()}`;

    const projectDelete = document.createElement('div');
    projectDelete.classList.add('projectDelete');

    const trashIcon = new Image();
    trashIcon.src = trash;
    trashIcon.classList.add('trash');
    projectDelete.appendChild(trashIcon)

    projectDiv.append(projectName, projectDelete)
    projectList.appendChild(projectDiv);
    projectList.appendChild(addProjectDiv);

    projectDelete.addEventListener('click', function() {
      this.parentElement.remove();
      myProjectsList.forEach((project, index) => {
        myProjectsList.splice(index, 1)
        localStorage.setItem('projects', JSON.stringify(myProjectsList));
  
      })
    })
  }
  const handleForm = (e) => {
    e.preventDefault();

    const project = newProject(input.value);
    displayProject(project);
    form.reset();
    projectList.removeChild(form); 
  }

  myProjectsList.forEach(displayProject)
  form.addEventListener('submit', handleForm)
  addPIcon.addEventListener('click', displayForm)
  cancelBtn.addEventListener('click', closeForm)

  return {projectList}
  
})();

export default myProjectsModule;