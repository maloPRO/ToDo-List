import { tabSelection } from './tabs';
import inboxContent from './inbox';
// eslint-disable-next-line no-unused-vars
import css from './main.css';
// eslint-disable-next-line no-unused-vars
import newTask from './newtask';
import todaysTasks from './today';
// eslint-disable-next-line no-unused-vars
import myProjectsModule from './projects';

inboxContent();
tabSelection();
todaysTasks.todayContent();
