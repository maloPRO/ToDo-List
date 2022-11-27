import taskicon from './images/add.png';

const tabSelectionModule = (function () {
  const defaultTabs = document.querySelectorAll('.tab');
  const projectTabs = document.querySelectorAll('.projects')
  const section = document.querySelector('.section');
  const addTaskDiv = document.createElement('div');

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

      
      tabNav.setAttribute('class', 'tabNav')
      tabNav.textContent = `${this.textContent} Tasks`;

      tabBody.classList.add('projectBody');
      tabBody.classList.add(`${this.textContent}Body`)

      tabBody.appendChild(addTaskDiv)
      tabContent.append(tabNav, tabBody);
      section.appendChild(tabContent);

    } )
  })


  return {addTaskDiv}
})();

export default tabSelectionModule;