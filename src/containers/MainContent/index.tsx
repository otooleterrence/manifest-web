import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, getThemeProps, withStyles } from '@material-ui/styles';
import { selectTheme } from '../../store/slices/theme';
import { useManifestTheme } from '../../theme';
import MainContainer from '../MainContainer';
import Header from '../Header';
import List from '../List/';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function MainContent(props: Props) {
  const myTheme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={useManifestTheme(myTheme)}>
      <MainContainer />
    </ThemeProvider>
  )
}

export default withStyles(styles)(MainContent);
