import myProjectsModule from './projects';

const tabSelectionModule = (function () {

  const section = document.querySelector('.section');
  const tabs = document.querySelectorAll('.tab');
  const allTasksTab = document.createElement('div');
  const todayTab = document.createElement('div');
  const upcomingTab = document.createElement('div');
  const filtersTab = document.createElement('div');
  const workTab = document.createElement('div');
  const personalTab = document.createElement('div');

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
        } else if (tab.id === 'filters') {
          removeAllChildNodes(section);
          section.appendChild(filtersTab);
        } else if (tab.id === 'personal') {
          removeAllChildNodes(section);
          section.appendChild(personalTab);
        } else if (tab.id === 'work') {
          removeAllChildNodes(section);
          section.appendChild(workTab);
        }
      });
    });

    const btn = myProjectsModule.addBtn;

    btn.addEventListener('click', () => {
      const list = document.querySelectorAll('.projects');

      list.forEach((item) => {
        item.addEventListener('click', () => {
          
        })
      })

    })

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

        section.appendChild(newTab);
      })
    }) 
  };

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
  
          section.appendChild(newTab);
        })
      })
  
    });
  }

  return { todayTab, upcomingTab, allTasksTab, tabSelection, customProjects}

})();

export default tabSelectionModule;



