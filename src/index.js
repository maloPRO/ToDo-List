import format from 'date-fns/format';
import tabSelectionModule from './tabs';
// eslint-disable-next-line no-unused-vars
import css from './main.css';
import trash from './images/delete.png';

tabSelectionModule.tabSelection();
tabSelectionModule.customProjects();
tabSelectionModule.defaults();

const form = document.getElementById('form');


function handleForm(event) {
  event.preventDefault();
}

const newTaskModule = (function () {

  const title = document.getElementById('title');
  const dueDate = document.getElementById('dueDate');
  
  const openForm = () => { document.getElementById('formContainer').style.display = 'block'; };
  const closeForm = () => { document.getElementById('formContainer').style.display = 'none'; };

  const submitForm = () => {

    const addTaskButton = tabSelectionModule.addNewTask;
    const taskSection = addTaskButton.parentElement;
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');
 
    taskSection.appendChild(taskContainer);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    taskContainer.appendChild(checkbox);
    checkbox.setAttribute('class', 'checkbox')

    const titleUpcase = title.value;
    const taskTitle = document.createElement('div');
    taskTitle.textContent = `${titleUpcase.charAt(0).toUpperCase()}${titleUpcase.slice(1).toLowerCase()}`
    taskContainer.appendChild(taskTitle);
    taskTitle.setAttribute('class', 'taskTitle')

    const taskDate = document.createElement('div');
    taskDate.textContent = dueDate.value;
    taskContainer.appendChild(taskDate);
    taskDate.setAttribute('class', 'taskDate');

    const trashIcon = new Image();
    trashIcon.src = trash;
    trashIcon.setAttribute('class', 'trashTask')
    taskContainer.appendChild(trashIcon);

    document.querySelectorAll('.trashTask').forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
      })
      
    })
  }
  

  const clearForm = () => {
    form.reset();
  }

  form.addEventListener('submit', handleForm);
  document.getElementById('submitBtn').addEventListener('click', submitForm);
  document.getElementById('submitBtn').addEventListener('click', closeForm);
  document.getElementById('submitBtn').addEventListener('click', clearForm);
  document.getElementById('closeBtn').addEventListener('click', closeForm);
  document.getElementById('formClose').addEventListener('click', closeForm);

  const btn = tabSelectionModule.addNewTask;

  const open = () => newTaskModule.openForm();

  btn.addEventListener('click', open)

  return {openForm};

})();

