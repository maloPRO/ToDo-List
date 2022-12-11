import taskicon from '../images/plus.png';
import deleteIcon from '../images/delete.png';

const tabSelectionModule = (function () {

  const defaultTabs = document.querySelectorAll('.tab');
  const projectTabs = document.querySelectorAll('.projects')
  const section = document.querySelector('.section');
  const addTaskDiv = document.createElement('div');
  let tabTasks = []

  const taskIcon = new Image()
  taskIcon.src = taskicon;

  addTaskDiv.setAttribute('class', 'addTaskDiv')
  addTaskDiv.appendChild(taskIcon);
  
  defaultTabs.forEach((tab) => {
    // eslint-disable-next-line prefer-arrow-callback

    tab.addEventListener('click', function () {

      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }

      const tabContent = document.createElement('div');
      const tabNav = document.createElement('div');
      const tabBody = document.createElement('div');
      
      tabBody.setAttribute('class', 'defaultTabBody');
      tabNav.setAttribute('class', 'tabNav');

      tabNav.textContent = `${this.textContent} Tasks`;
      tabContent.append(tabNav, tabBody);
      section.appendChild(tabContent);

    })
  })

  projectTabs.forEach(tab => {
    // eslint-disable-next-line prefer-arrow-callback
    tab.addEventListener('click', function() {

      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
      const tabContent = document.createElement('div');
      const tabNav = document.createElement('div');
      const tabBody = document.createElement('div');

      tabContent.setAttribute('class', `${this.textContent}`)
      
      tabNav.setAttribute('class', 'tabNav')
      tabNav.textContent = `${this.textContent} Tasks`;

      tabBody.classList.add('projectBody');
      tabBody.classList.add(`${this.textContent}Body`)

      tabBody.appendChild(addTaskDiv)
      tabContent.append(tabNav, tabBody);
      section.appendChild(tabContent);

      tabTasks = JSON.parse(localStorage.getItem(`${tabContent.className}`))
      
      tabTasks.forEach((tabTask) => {
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
    
        taskTitle.textContent = tabTask.title;
        taskDate.textContent = tabTask.dueDate;
    
        tasksContainer.append(checkBox, taskTitle, taskDate, deleteTask)
        tabContent.appendChild(tasksContainer);

        deleteTask.addEventListener('click', function () {
          this.parentElement.remove();
          tabTasks.forEach((tab, index) => {
            tabTasks.splice(index, 1)
            localStorage.setItem(`${tabContent.className}`, JSON.stringify(tabTasks));
          })
        })
        
      })
    })
  })


  return {addTaskDiv, tabTasks }
})();

export default tabSelectionModule;