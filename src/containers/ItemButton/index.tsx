import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import {
  selectTasks,
  addTask,
  finishTask,
  cancelTask,
} from '../../store/slices/toDoList';
import { styles } from './styles';

interface Props {
  classes: any,
  children: any, // should be children
  onButtonClick: any, // should be func
  // text: string,
  // id: number,
}

export function TaskItem(props: Props) {
  const {classes, children, onButtonClick } = props;
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState('');

  return (
    <button
      onClick={() => {
        onButtonClick();
      }}
    >{children}</button>
  )
}

export default withStyles(styles)(TaskItem);
