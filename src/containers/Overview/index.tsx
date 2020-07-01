import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
// import {
//   selectTasks,
//   addTask,
//   finishTask,
//   cancelTask,
// } from '../store/slices/toDoList';
import DateTitle from '../DateTitle';
import { styles } from './styles';
import classes from '*.module.css';

interface Props {
  classes: any,
}

export function Overview(props:Props) {
  const { classes } = props;
  // const tasks = useSelector(selectTasks);
  // const dispatch = useDispatch();
  // const [newTask, setNewTask] = useState('');
  return (
    <div className= {classes.listContainer}>
      <DateTitle />
      This is the overview
    </div>
  )
}

export default withStyles(styles)(Overview);
