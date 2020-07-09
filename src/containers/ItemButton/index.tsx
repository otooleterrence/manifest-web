import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';

interface Props {
  classes: any,
  children: any, // should be children
  onButtonClick: any, // should be func
}

export function TaskItem(props: Props) {
  const {classes, children, onButtonClick } = props;

  return (
    <button
      className={classes.buttons}
      onClick={() => {
        onButtonClick();
      }}
    >{children}</button>
  )
}

export default withStyles(styles)(TaskItem);
