import { todayTab } from "./tabs";
import format from "date-fns/format";

export const todaysTasks = (function () {
    const todayContent = () => {
    const container = document.createElement('div');
    todayTab.setAttribute('id', 'todayTab');
    todayTab.appendChild(container);
  
    const todayTabNav = document.createElement('div');
    todayTabNav.setAttribute('id', 'todayTabNav');
    todayTab.appendChild(todayTabNav);
  
    const today = document.createElement('div');
    today.setAttribute('class','dayHeadings');
    today.textContent = 'Today';
    todayTabNav.appendChild(today);
  
    const  date = format(new Date(), 'E MMM dd');
    let todaysDate = document.createElement('div');
    todaysDate.setAttribute('class', 'dates');
    todayTabNav.appendChild(todaysDate);
    todaysDate.textContent = `${date}`
    
  }
  
  return {todayContent}
})();
