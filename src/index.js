import tabSelectionModule from './tabs';
// eslint-disable-next-line no-unused-vars
import css from './main.css';

tabSelectionModule.tabSelection();
tabSelectionModule.customProjects();
tabSelectionModule.defaults();

const newTaskModule = (function () {
  const taskList = [];
  class Task {
    constructor(title, dueDate, description, category) {
      this.title = title;
      this.dueDate = dueDate;
      this.description = description;
      this.category = category;
    }
  }

  const addTask = () => {
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const dueDate = document.getElementById('dueDate');
    const description = document.getElementById('description');

    const tasks = new Task(title.value, category.value, dueDate.value, description.value);

    taskList.push(tasks);
  };

  const openForm = () => { document.getElementById('formContainer').style.display = 'block'; };
  const closeForm = () => { document.getElementById('formContainer').style.display = 'none'; };

  document.getElementById('closeBtn').addEventListener('click', closeForm);
  document.getElementById('submitBtn').addEventListener('click', addTask);
  document.getElementById('formClose').addEventListener('click', closeForm);

  return {openForm};
}());

const btn = tabSelectionModule.addNewTask;

const open = () => newTaskModule.openForm();

btn.addEventListener('click', open)