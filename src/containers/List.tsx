import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import {
  selectTasks,
  addTask,
  finishTask,
  cancelTask,
} from '../store/slices/toDoList';
import TaskItem from './TaskItem';
import { styles } from './styles';
import classes from '*.module.css';

interface Props {
  classes: any,
}

export function List(props:Props) {
  const { classes } = props;
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  return (
    <div className= {classes.listContainer}>
      <ul className={classes.list}>
        {tasks.map((task: any, index) => (
          <TaskItem text={task.text} done={task.done} id={index}/>
        ))}
      </ul>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button
        onClick = {() => {
          dispatch(addTask(newTask));
          setNewTask('');
        }}
      >Add Task</button>
    </div>
  )
}

export default withStyles(styles)(List);