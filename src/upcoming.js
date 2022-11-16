import tabSelectionModule from './tabs';
import Icon from './images/calenderIcon.png';


const upcomingTabModule = (function () {
  const upcomingTabHeader = document.createElement('div');
  upcomingTabHeader.setAttribute('id', 'upcomingTabHeader');
  upcomingTabHeader.setAttribute('class', 'sectionHeader');

  const upcomingIcon = new Image()
  upcomingIcon.src = Icon;
  upcomingIcon.setAttribute('class', 'tabIcons' );
  upcomingTabHeader.appendChild(upcomingIcon);

  const upcomingTabTitle = document.createElement('div');
  upcomingTabTitle.textContent = 'Upcoming Tasks';
  upcomingTabHeader.appendChild(upcomingTabTitle);

  tabSelectionModule.upcomingTab.appendChild(upcomingTabHeader);

})();

export default upcomingTabModule 