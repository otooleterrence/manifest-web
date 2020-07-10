import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '3rem',
    color: theme.highlight,
    padding: '1rem',
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  header: {
    fontSize: '3rem',
    fontWeight: 800,
  },
});
