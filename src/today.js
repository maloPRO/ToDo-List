import tabSelectionModule from './tabs';
import Icon from './images/day.png';

const todaysTasksModule = (function () {

  const todayTasksHeader = document.createElement('div');
  todayTasksHeader.setAttribute('id', 'todayTasksHeader');
  todayTasksHeader.setAttribute('class', 'sectionHeader');

  const todayIcon = new Image()
  todayIcon.src = Icon;
  todayIcon.setAttribute('class', 'tabIcons' );
  todayTasksHeader.appendChild(todayIcon);

  const todayTasksTitle = document.createElement('div');
  todayTasksTitle.textContent = 'Today\'s Tasks';
  todayTasksHeader.appendChild(todayTasksTitle);

  tabSelectionModule.todayTab.appendChild(todayTasksHeader)


  return { };
}());

export default todaysTasksModule;
