import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { selectTheme } from '../../store/slices/theme';
import { useManifestTheme } from '../../theme';
import MainContainer from '../MainContainer';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
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
