import tabSelectionModule from './tabs';

const tasksModule = (function () {
  const form = document.getElementById('form');
  const formContainer = document.getElementById('formContainer');
  const addTask = tabSelectionModule.addTaskDiv;


  addTask.addEventListener('click', () => {
    formContainer.style.display = 'block';
  });

  return {}
})();

export default tasksModule;