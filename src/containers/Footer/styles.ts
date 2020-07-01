import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // height: '5rem',
    backgroundColor: 'white',
    padding: '1rem',
    // marginRight: '1rem',
    borderBottom: `3px solid ${theme.backgroundColor}`,
  },
});
