
const newTask = (function () {

let taskList = [];

class Task {
  constructor (title, dueDate, description, category) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.category = category;
  }
  get desc () {
    return `${this.title} is a task due on ${this.dueDate}`
  }
};

const addTask = () => {

  let title = document.getElementById('title');
  let category = document.getElementById('category');
  let dueDate = document.getElementById('dueDate');
  let description = document.getElementById('description');

  const tasks = new Task(title.value, category.value, dueDate.value, description.value);

  taskList.push(tasks);
  console.log(tasks.dueDate);

};

const openForm = () => { document.getElementById('formContainer').style.display = 'block';};
const closeForm = () => { document.getElementById('formContainer').style.display = 'none';};

document.getElementById('addTask').addEventListener('click', openForm);
document.getElementById('closeBtn').addEventListener('click', closeForm);


form = document.getElementById('form');
    function handleForm(event) {
        event.preventDefault();
};

form.addEventListener('submit', handleForm);

document.getElementById('submitBtn').addEventListener('click', addTask);

return {}

})();