import tabSelectionModule from './tabs';
import Icon from './images/inboxIcon.png';

const allTasksModule = (function () {
  const allTasksHeader = document.createElement('div');
  allTasksHeader.setAttribute('id', 'allTasksHeader');
  allTasksHeader.setAttribute('class', 'sectionHeader');

  const allTasksIcon = new Image()
  allTasksIcon.src = Icon;
  allTasksIcon.setAttribute('class', 'tabIcons' );
  allTasksHeader.appendChild(allTasksIcon);

  const allTasksTitle = document.createElement('div');
  allTasksTitle.textContent = 'All Tasks';
  allTasksHeader.appendChild(allTasksTitle);

  tabSelectionModule.allTasksTab.appendChild(allTasksHeader)
    
})();

export default allTasksModule;
