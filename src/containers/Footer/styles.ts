import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  footer: {
    color: theme.backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // height: '5rem',
    backgroundColor: theme.seafoam,
    padding: '1rem',
    // marginRight: '1rem',
    borderBottom: `0.5rem solid ${theme.backgroundColor}`,
  },
});
