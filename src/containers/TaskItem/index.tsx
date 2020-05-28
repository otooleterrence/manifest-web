import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import ItemButton from '../ItemButton';
import {
  selectTasks,
  addTask,
  finishTask,
  cancelTask,
} from '../../store/slices/toDoList';
import { styles } from './styles';

interface Props {
  classes: any,
  done: boolean,
  text: string,
  id: number,
}

export function TaskItem(props: Props) {
  const {classes, done, text, id } = props;
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState('');

  return (
    <li className={classes.listItem}>
      <div className={classes.itemContainer}>
        <button
          onClick={() => {
            dispatch(finishTask(id));
          }}
        >•</button>
        <span>{done && '~~'}
        {text}
        {done && '~~'}
        </span>
        <ItemButton onButtonClick={() => dispatch(cancelTask(id))}>edit</ItemButton>
        <ItemButton onButtonClick={() => dispatch(cancelTask(id))}>cancel</ItemButton>
        {/* <button
          onClick={() => {
            dispatch(cancelTask(id));
          }}
        >✖️</button> */}
      </div>
  </li>
  )
}

export default withStyles(styles)(TaskItem);
