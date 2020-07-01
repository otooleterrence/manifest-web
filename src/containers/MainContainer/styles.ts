import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => {
  console.log(theme);

  return createStyles({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    // flexDirection: 'column',
    // flexGrow: 1,
    backgroundColor: theme.backgroundColor,
    // height: '100%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    // marginBottom: '1rem',
    // marginRight: '1rem',
    // '& button': {
    //   background: 'transparent',
    //   border: 'none',
    //   color: theme.secondaryText,
    //   fontWeight: 'bold',
    // }
  },
})
};
