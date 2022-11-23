import format from 'date-fns/format';
import tabSelectionModule from './tabs';
// eslint-disable-next-line no-unused-vars
import css from './main.css';
import trash from './images/delete.png';

tabSelectionModule.tabSelection();
tabSelectionModule.customProjects();
tabSelectionModule.defaults();

const form = document.getElementById('form');

const openForm = () => { document.getElementById('formContainer').style.display = 'block'; };
const closeForm = () => { document.getElementById('formContainer').style.display = 'none'; };

const newTaskModule = (function () {

  const myTasks = [];

  class Task {
    constructor(title, dueDate) {
      this.title = title;
      this.dueDate = dueDate;
    }
  }

  const titleInput = document.getElementById('title');
  const dueDateInput = document.getElementById('dueDate');

  const createTask = () => {

    const task = new Task(titleInput.value, dueDateInput.value);
    myTasks.push(task)

    const addTaskButton = tabSelectionModule.addNewTask;
    const taskSection = addTaskButton.parentElement;
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');
 
    taskSection.appendChild(taskContainer);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    taskContainer.appendChild(checkbox);
    checkbox.setAttribute('class', 'checkbox')

    const titleUpcase = task.title;
    const taskTitle = document.createElement('div');
    taskTitle.textContent = `${titleUpcase.charAt(0).toUpperCase()}${titleUpcase.slice(1).toLowerCase()}`
    taskContainer.appendChild(taskTitle);
    taskTitle.setAttribute('class', 'taskTitle')

    const taskDate = document.createElement('div');
    taskDate.textContent = task.dueDate;
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

  function handleForm(event) { 
    
    event.preventDefault();
    createTask()
    console.log(myTasks)
    
  }

  const clearForm = () => {
    form.reset();
  }

  form.addEventListener('submit', handleForm);
  document.getElementById('closeBtn').addEventListener('click', closeForm);
  document.getElementById('formClose').addEventListener('click', closeForm);

  const btn = tabSelectionModule.addNewTask;

  const open = () => newTaskModule.openForm();

  btn.addEventListener('click', open)

  return {openForm};

})();

