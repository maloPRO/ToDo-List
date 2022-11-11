import {removeAllChildNodes} from './clear-section'
export const tabSelection = () => {
  const section = document.querySelector('.section');
  const tabs = document.querySelectorAll('.topSideBar');  
  const inboxTab = document.createElement('div');
  const todayTab = document.createElement('div');
  const upcomingTab = document.createElement('div');
  const filtersTab = document.createElement('div');

  inboxTab.textContent = 'INBOX';
  todayTab.textContent = 'TODAY';
  upcomingTab.textContent = 'UPCOMING';
  filtersTab.textContent = 'FILTERS & LABELS';

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.id == 'inbox') {
        removeAllChildNodes(section);
        section.appendChild(inboxTab);
      } else if (tab.id == 'day') {
        removeAllChildNodes(section);
        section.appendChild(todayTab);
      } else if (tab.id == 'upcoming') {
        removeAllChildNodes(section);
        section.appendChild(upcomingTab);
      } else if (tab.id == 'filters') {
        removeAllChildNodes(section);
        section.appendChild(filtersTab);
      }
    })
  })


}