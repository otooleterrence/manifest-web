import React from 'react';
import { withStyles } from '@material-ui/styles';
import { getDate } from '../../utils/date';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function Header(props: Props) {
  return (
    <header className={props.classes.headerContainer}>
      <h2>{getDate()}</h2>
    </header>
  );
};

export default withStyles(styles)(Header);
