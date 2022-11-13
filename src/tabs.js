export const section = document.querySelector('.section');
export const tabs = document.querySelectorAll('.tab');  
export const inboxTab = document.createElement('div');
export const todayTab = document.createElement('div');
export const upcomingTab = document.createElement('div');
export const filtersTab = document.createElement('div');
export const workTab = document.createElement('div');
export const personalTab = document.createElement('div');



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

export const tabSelection = () => {
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
      } else if (tab.id == "personal") {
        removeAllChildNodes(section);
        section.appendChild(personalTab);
      } else if (tab.id == 'work') {
        removeAllChildNodes(section);
        section.appendChild(workTab);
      }
    })
  })
}
