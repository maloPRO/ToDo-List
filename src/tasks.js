import tabSelectionModule from './tabs';

const tasksModule = (function () {
  const taskList = [];
  const form = document.getElementById('form');
  const formContainer = document.getElementById('formContainer');
  const titleInput = document.getElementById('title');
  const dueDateInput = document.getElementById('dueDate');
  const submitBtn = document.getElementById('submitBtn');
  const cancelBtn = document.getElementById('closeBtn');
  const addTask = tabSelectionModule.addTaskDiv;

  class Task {
    constructor (title, dueDate) {
      this.title = title;
      this.dueDate = dueDate;
    }
  }
  function displayTask () {
    console.log(taskList)
  }

  function createTask () {
    const task = new Task (titleInput.value, dueDateInput.value);
    taskList.push(task);
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
  form.addEventListener('submit', handleForm)
  addTask.addEventListener('click', openForm);
  cancelBtn.addEventListener('click', closeFrom);

  return {}
})();

export default tasksModule;