import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import {
  selectTasks,
  addTask,
} from '../../store/slices/tasks';
import {
  selectEvents,
} from '../../store/slices/events';
import {
  selectNotes,
} from '../../store/slices/notes';
import List from '../../components/List';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
}

export function TodayLayout(props: Props) {
  const { classes } = props;
  const tasks = useSelector(selectTasks);
  const events = useSelector(selectEvents);
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  return (
    <div className={classes.listContainer}>
      <div className={classes.lists}>
        <List name="events" bullets={events}/>
        <List name="tasks" bullets={tasks}/>
        <List name="notes" bullets={notes}/>
      </div>
      <div>
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTask(newTask));
            setNewTask('');
          }}
        >Add Task</button>
      </div>
    </div>
  )
}

export default withStyles(styles)(TodayLayout);
