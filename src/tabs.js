const tabSelectionModule = (function () {
  const tabs = document.querySelectorAll('.tab');
  const section = document.querySelector('.section');
  const tabNav = document.createElement('div');
  const tabBody = document.createElement('div');

  function tabSwitch () {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent')
    tabContent.setAttribute('id', `${this.textContent}Tab`);
    section.appendChild(tabContent);
    tabNav.textContent = `${this.textContent} Tasks`;

    tabNav.classList.add('tabNav');
    tabBody.classList.add('tabBody')

    tabContent.append(tabNav, tabBody)
  }
  
  tabs.forEach(tab => {
    tab.addEventListener('click', tabSwitch)
  })

  return {}
})();

export default tabSelectionModule;