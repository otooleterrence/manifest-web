import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Header from '../Header';
import List from '../List';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function MainContent(props: Props) {
  return (
    <div className={props.classes.mainContainer}>
      <Header />
      <List />
    </div>
  )
}

export default withStyles(styles)(MainContent);
