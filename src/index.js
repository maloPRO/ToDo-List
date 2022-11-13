import { format , getDay, addDays} from 'date-fns';
import { tabSelection } from './tabs';
import { inboxContent} from './inbox';
import { todayContent} from './today';
import css from './main.css';
import { newTask } from './newtask';

todayContent();
inboxContent();
tabSelection();
