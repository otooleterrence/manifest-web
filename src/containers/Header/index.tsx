import React from 'react';
import { withStyles } from '@material-ui/styles';
import { getDate } from '../../utils/date';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
}

export function Header(props: Props) {
  return (
    <header className={props.classes.headerContainer}>
      <span className={props.classes.header}>{getDate()}</span>
    </header>
  );
};

export default withStyles(styles)(Header);
