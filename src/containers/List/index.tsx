import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import {
  selectTasks,
  addTask,
} from '../../store/slices/toDoList';
import TaskItem from '../TaskItem';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function List(props: Props) {
  const { classes } = props;
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  return (
    <div className={classes.listContainer}>
      <div className={classes.lists}>
        <div className={classes.list}>
          <h2>events</h2>
          <ul>
            {tasks.map((task: any, index) => (
              <TaskItem text={task.text} done={task.done} id={index} key={`item-${index}`} />
            ))}
          </ul>
        </div>
        <div className={classes.list}>
          <h2>tasks</h2>
          <ul>
            {tasks.map((task: any, index) => (
              <TaskItem text={task.text} done={task.done} id={index} key={`item-${index}`} />
            ))}
          </ul>
        </div>
        <div className={classes.list}>
          <h2>notes</h2>
          <ul>
            {tasks.map((task: any, index) => (
              <TaskItem text={task.text} done={task.done} id={index} key={`item-${index}`} />
            ))}
          </ul>
        </div>
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

export default withStyles(styles)(List);
