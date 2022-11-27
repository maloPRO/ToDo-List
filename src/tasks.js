import tabSelectionModule from './tabs';
import deleteIcon from './images/delete.png';

const tasksModule = (function () {
  const taskList = [];
  const taskForm = document.querySelector('#form');
  const formContainer = document.getElementById('formContainer');
  const titleInput = document.getElementById('title');
  const dueDateInput = document.getElementById('dueDate');
  const cancelBtn = document.getElementById('closeBtn');
  const addTask = tabSelectionModule.addTaskDiv;

  class Task {
    constructor (title, dueDate) {
      this.title = title;
      this.dueDate = dueDate;
    }
  }
  const createTask = () => {
    const task = new Task(titleInput.value, dueDateInput.value);
    taskList.push(task);
  }
  
  function displayTask () {
    const tabContent = addTask.parentElement;
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('taskContainer');

    const checkBox = document.createElement('input');
    const taskTitle = document.createElement('div');  
    const taskDate = document.createElement('div');
    const deleteTask = document.createElement('div');
    const deleteBtn = new Image();

    deleteBtn.src = deleteIcon;
    deleteTask.appendChild(deleteBtn);
    deleteBtn.classList.add('deleteTaskIcon');

    checkBox.setAttribute('type', 'checkbox');

    taskTitle.textContent = titleInput.value;
    taskDate.textContent = dueDateInput.value;

    tasksContainer.append(checkBox, taskTitle, taskDate, deleteTask)
    tabContent.appendChild(tasksContainer);

    deleteTask.addEventListener('click', function () {
      this.parentElement.remove();
      console.log(889);
    })
  }

  const openForm = () => {
    formContainer.style.display = 'block';
  }
  const closeFrom = () => {
    formContainer.style.display = 'none';
  }
  
  function handleForm (event) {
    event.preventDefault();
    createTask()
    displayTask();
    closeFrom();
    
  }

  taskForm.addEventListener('submit', handleForm)
  addTask.addEventListener('click', openForm);
  cancelBtn.addEventListener('click', closeFrom);

  return {}
})();

export default tasksModule;