const newTask = (function () {

class Task {
  constructor (title, dueDate, description, category) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.category = category;
  }
};

let taskList = [];

const addTask = () => {
  let title = document.getElementById('title');
  let category = document.getElementById('category');
  let dueDate = document.getElementById('dueDate');
  let description = document.getElementById('description');

  const tasks = new Task(title.value, category.value, dueDate.value, description.value);

  taskList.push(tasks);
};

const openForm = () => { document.getElementById('formContainer').style.display = 'block';};
const closeForm = () => { document.getElementById('formContainer').style.display = 'none';};

form = document.getElementById('form');
    function handleForm(event) {
        event.preventDefault();
};

form.addEventListener('submit', handleForm);
document.getElementById('addTask').addEventListener('click', openForm);
document.getElementById('closeBtn').addEventListener('click', closeForm);
document.getElementById('submitBtn').addEventListener('click', addTask);

return {}

})();
