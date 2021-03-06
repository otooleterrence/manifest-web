import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: 'white',
    // height: '100%',
    // marginLeft: '1rem',
    // marginBottom: '1rem',
    // marginRight: '1rem',
    '& button': {
      background: 'transparent',
      border: 'none',
      color: theme.secondaryText,
      fontWeight: 'bold',
    }
  },
});
