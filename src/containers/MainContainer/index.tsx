import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Header from '../Header';
import List from '../List/';
import Footer from '../Footer/';
import Overview from '../Overview';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function MainContent(props: Props) {
  return (
    <main className={props.classes.mainContainer}>
      <Header />
      {/* <Overview /> */}
      <List />
      <Footer />
    </main>
  )
}

export default withStyles(styles)(MainContent);
