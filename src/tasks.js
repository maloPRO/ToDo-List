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
  const tabTask = tabSelectionModule.tabTasks;

  class Task {
    constructor (title, dueDate) {
      this.title = title;
      this.dueDate = dueDate;
    }
  }
  const createTask = (title, dueDate) => {
    const task = new Task(titleInput.value, dueDateInput.value);
    taskList.push(task);
    tabTask.push(task);

    localStorage.setItem(addTask.parentElement.parentElement.className, JSON.stringify(tabTask))
    return { title, dueDate }

  }
  
  function displayTask ({ title , dueDate }) {
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

    taskTitle.textContent = title;
    taskDate.textContent = dueDate;

    tasksContainer.append(checkBox, taskTitle, taskDate, deleteTask)
    tabContent.appendChild(tasksContainer);

    deleteTask.addEventListener('click', function () {
      this.parentElement.remove();
      
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
    const task = createTask(titleInput.value, dueDateInput.value)
    displayTask(task);
    closeFrom();
    
    
  }

  taskList.forEach(displayTask);
  taskForm.addEventListener('submit', handleForm)
  addTask.addEventListener('click', openForm);
  cancelBtn.addEventListener('click', closeFrom);

  return { displayTask }
})();


export default tasksModule;