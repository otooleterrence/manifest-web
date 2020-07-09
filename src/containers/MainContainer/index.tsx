import React from 'react';
import { withStyles } from '@material-ui/styles';
import Header from '../Header';
import List from '../List/';
import Footer from '../Footer/';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function MainContent(props: Props) {
  return (
    <main className={props.classes.mainContainer}>
      <Header />
      <List />
      <Footer />
    </main>
  )
}

export default withStyles(styles)(MainContent);
