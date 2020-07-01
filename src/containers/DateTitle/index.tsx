import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { getDate } from '../../utils/date';
// import {
//   selectTasks,
//   addTask,
//   finishTask,
//   cancelTask,
// } from '../store/slices/toDoList';
// import TaskItem from './TaskItem';
import { styles } from './styles';
import classes from '*.module.css';

interface Props {
  classes: any,
}

export function DateTitle(props: Props) {
  const { classes } = props;
  // const tasks = useSelector(selectTasks);
  // const dispatch = useDispatch();
  // const [newTask, setNewTask]  = useState('');
  return (
    <div className={classes.dateContainer}>
      {getDate()}
    </div>
  )
}

export default withStyles(styles)(DateTitle);
