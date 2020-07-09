import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import ItemButton from '../ItemButton';
import {
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

  const [showButtons, setShowButtons] = useState(false);

  return (
    <li
      className={classes.listItem}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      onFocus={() => setShowButtons(true)}
      onBlur={() => setShowButtons(false)}
      // tabIndex={0}
    >
      <div className={classes.itemContainer}>
        <ItemButton
          onButtonClick={() => {
            dispatch(finishTask(id));
          }}
        >•</ItemButton>
        <span>{done && '~~'}
        {text}
        {done && '~~'}
        </span>
        {showButtons && (
          <>
            <ItemButton onButtonClick={() => dispatch(cancelTask(id))}>edit</ItemButton>
            <ItemButton onButtonClick={() => dispatch(cancelTask(id))}>cancel</ItemButton>
        </>)}
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
