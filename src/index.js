import { format , getDay, addDays} from 'date-fns';
import { tabSelection } from './tabs';
import { inboxContent} from './inbox';
import css from './main.css';
import { newTask } from './newtask';
import { todaysTasks } from './today';
import {myProjects} from './projects';
inboxContent();
tabSelection();


myProjects.newProject();
todaysTasks.todayContent();
