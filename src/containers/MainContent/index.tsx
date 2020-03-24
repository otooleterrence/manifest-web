import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { selectTheme } from '../../store/slices/theme';
import { useManifestTheme } from '../../theme';
import Header from '../Header';
import List from '../List';

export default function MainContent() {
  const myTheme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={useManifestTheme(myTheme)}>
      <div>
        <Header />
        <List />
      </div>
    </ThemeProvider>
  )
}
