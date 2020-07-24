import React from 'react';
import { withStyles } from '@material-ui/styles';
import Header from '../Header';
import TodayLayout from '../TodayLayout';
import NotesEditor from '../NotesEditor';
import Footer from '../Footer';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
}

export function MainContent(props: Props) {
  return (
    <main className={props.classes.mainContainer}>
      <Header />
      <TodayLayout />
      <NotesEditor />
      <Footer />
    </main>
  )
}

export default withStyles(styles)(MainContent);
