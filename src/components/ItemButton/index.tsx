import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
  children: any, // should be children
  onButtonClick: () => any,
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
