// eslint-disable-next-line func-names
const newTaskModule = (function () {
  class Task {
    constructor(title, dueDate, description, category) {
      this.title = title;
      this.dueDate = dueDate;
      this.description = description;
      this.category = category;
    }
  }

  const taskList = [];

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

  document.getElementById('addTask').addEventListener('click', openForm);
  document.getElementById('closeBtn').addEventListener('click', closeForm);
  document.getElementById('submitBtn').addEventListener('click', addTask);
  document.getElementById('formClose').addEventListener('click', closeForm);

  return {};
}());

export default newTaskModule;
