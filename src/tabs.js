import myProjectsModule from './projects';
import tasksIcon from './images/inboxIcon.png';
import iconToday from './images/day.png';
import iconUpcoming from './images/calenderIcon.png';

// eslint-disable-next-line func-names
const tabSelectionModule = (function () {

  const section = document.querySelector('.section');
  const tabs = document.querySelectorAll('.tab');

  const allTasksTab = document.createElement('div');
  allTasksTab.setAttribute('class', 'upperTabs');
  allTasksTab.setAttribute('id', 'allTasksTab');

  const todayTab = document.createElement('div');
  todayTab.setAttribute('class', 'upperTabs');
  todayTab.setAttribute('id', 'todayTabs');
  
  const upcomingTab = document.createElement('div');
  upcomingTab.setAttribute('class', 'upperTabs');
  todayTab.setAttribute('id', 'upcomingTabs');

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    };
  }

  const tabSelection = () => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (tab.id === 'allTasks') {
          removeAllChildNodes(section);
          section.appendChild(allTasksTab);
        } else if (tab.id === 'day') {
          removeAllChildNodes(section);
          section.appendChild(todayTab);
        } else if (tab.id === 'upcoming') {
          removeAllChildNodes(section);
          section.appendChild(upcomingTab);
        }
      });
    });
  };
  const addNewTask = document.createElement('div');

  const defaults = () => {
    const defaultProjects = document.querySelectorAll('.defaultProjects');
    defaultProjects.forEach((project) => {
      project.addEventListener('click', () => {

        removeAllChildNodes(section);

        const newTab = document.createElement('div');
        newTab.setAttribute('class', 'customTabs');
        newTab.setAttribute('id', `${project.textContent}Tab`)

        const newTabHeader = document.createElement('div');
        newTabHeader.setAttribute('class', 'sectionHeader');

        const newTabTitle = document.createElement('div');
        newTabTitle.textContent = `${project.textContent} Tasks`;
        newTabHeader.appendChild(newTabTitle);

        newTab.appendChild(newTabHeader);

        const addTaskSection = document.createElement('div');
        addTaskSection.setAttribute('class', 'addTaskSection');
        newTab.appendChild(addTaskSection);

        addNewTask.setAttribute('class', 'addNewTask');
        addNewTask.textContent = '+ New Project';
        addTaskSection.appendChild(addNewTask);

        section.appendChild(newTab);
      })
    }) 
  }
  const btn = myProjectsModule.addBtn;

  const customProjects = () => {
    btn.addEventListener('click', () => {
      const list = document.querySelectorAll('.projects');
  
      list.forEach((item) => {
        item.addEventListener('click', () => {
          removeAllChildNodes(section);
          
          const newTab = document.createElement('div');
          newTab.setAttribute('class', 'customTabs');
          newTab.setAttribute('id', `${item.textContent}Tab`)
  
          const newTabHeader = document.createElement('div');
          newTabHeader.setAttribute('class', 'sectionHeader');
  
          const newTabTitle = document.createElement('div');
          newTabTitle.textContent = `${item.textContent} Tasks`;
          newTabHeader.appendChild(newTabTitle);

          newTab.appendChild(newTabHeader);

          const addTaskSection = document.createElement('div');
          addTaskSection.setAttribute('class', 'addTaskSection');
          newTab.appendChild(addTaskSection);

          
          addNewTask.setAttribute('class', 'addNewTask');
          addNewTask.textContent = '+ New Project';
          addTaskSection.appendChild(addNewTask);
  
          section.appendChild(newTab);
        })
      })
  
    });
  }

  return { todayTab, upcomingTab, allTasksTab, tabSelection, customProjects, defaults, addNewTask}

})();

export default tabSelectionModule;

export const allTasksModule = (function () {
  const allTasksHeader = document.createElement('div');
  allTasksHeader.setAttribute('id', 'allTasksHeader');
  allTasksHeader.setAttribute('class', 'sectionHeader');

  const allTasksIcon = new Image()
  allTasksIcon.src = tasksIcon;
  allTasksIcon.setAttribute('class', 'tabIcons' );
  allTasksHeader.appendChild(allTasksIcon);

  const allTasksTitle = document.createElement('div');
  allTasksTitle.textContent = 'All Tasks';
  allTasksHeader.appendChild(allTasksTitle);

  tabSelectionModule.allTasksTab.appendChild(allTasksHeader);

  return {}
    
})();

export const todaysTasksModule = (function () {

  const todayTasksHeader = document.createElement('div');
  todayTasksHeader.setAttribute('id', 'todayTasksHeader');
  todayTasksHeader.setAttribute('class', 'sectionHeader');

  const todayIcon = new Image()
  todayIcon.src = iconToday;
  todayIcon.setAttribute('class', 'tabIcons' );
  todayTasksHeader.appendChild(todayIcon);

  const todayTasksTitle = document.createElement('div');
  todayTasksTitle.textContent = 'Today\'s Tasks';
  todayTasksHeader.appendChild(todayTasksTitle);

  tabSelectionModule.todayTab.appendChild(todayTasksHeader)


  return { };
}());

export const upcomingTabModule = (function () {
  const upcomingTabHeader = document.createElement('div');
  upcomingTabHeader.setAttribute('id', 'upcomingTabHeader');
  upcomingTabHeader.setAttribute('class', 'sectionHeader');

  const upcomingIcon = new Image()
  upcomingIcon.src = iconUpcoming;
  upcomingIcon.setAttribute('class', 'tabIcons' );
  upcomingTabHeader.appendChild(upcomingIcon);

  const upcomingTabTitle = document.createElement('div');
  upcomingTabTitle.textContent = 'Upcoming Tasks';
  upcomingTabHeader.appendChild(upcomingTabTitle);

  tabSelectionModule.upcomingTab.appendChild(upcomingTabHeader);

})();



